<template>
  <transition name="viewer-fade">
    <div
      tabindex="-1"
      class="cool-image-viewer__wrapper"
      :style="`z-index:${zIndex}`"
      v-show="visible"
    >
      <div
        class="cool-image-viewer__mask"
        :style="`background-color:${maskBgColor};`"
        @click="handleTapClose"
      ></div>
      <span
        class="cool-image-viewer__btn cool-image-viewer__close"
        @click="close"
      >
        <i class="iconfont icon-close"></i>
      </span>
      <span
        v-if="images && images.length > 1"
        class="cool-image-viewer__btn cool-image-viewer__pre"
        @click="pre"
      >
        <i class="iconfont icon-arrow-left"></i>
      </span>
      <span
        v-if="images && images.length > 1"
        class="cool-image-viewer__btn cool-image-viewer__next"
        @click="next"
      >
        <i class="iconfont icon-arrow-right"></i>
      </span>
      <div class="cool-image-viewer__image">
        <img
          :src="images[curIndex]"
          :style="imgStyle"
          @mousedown="handleMouseDown"
          v-show="images && images.length > 0 && images[curIndex]"
        />
      </div>
      <div class="cool-image-viewer__actions" :style="actionStyle">
        <div class="cool-image-viewer_actions__inner">
          <span
            class="iconfont icon-zoom-out"
            @click="handleActions('zoomOut')"
          ></span>
          <span
            class="iconfont icon-zoom-in"
            @click="handleActions('zoomIn')"
          ></span>
          <span class="cool-image-viewer__actions__divider"></span>
          <span
            class="iconfont icon-refresh-left"
            @click="handleActions('anticlockwise')"
          ></span>
          <span
            class="iconfont icon-refresh-right"
            @click="handleActions('clockwise')"
          ></span>
          <span
            class="iconfont icon-mirror"
            @click="handleActions('mirror')"
          ></span>
          <span class="cool-image-viewer__actions__divider"></span>
          <span class="iconfont" :class="mode.icon" @click="toggleMode"></span>
          <template v-if="showDownload">
            <span class="cool-image-viewer__actions__divider"></span>
            <span class="iconfont icon-download" @click="download"></span>
          </template>
        </div>
      </div>
      <transition name="thumbnail-fade" @after-enter="change(curIndex)">
        <div
          class="cool-image-viewer__thumbnail"
          ref="thumbnail"
          v-show="
            thumbnailTransitionShow &&
            showThumbnail &&
            images &&
            images.length > 1
          "
          @mouseenter="mouseEnterThumbnail(true)"
          @mouseleave="mouseEnterThumbnail(false)"
        >
          <div
            class="cool-image-viewer__thumbnail__inner"
            :class="{ current: curIndex === index }"
            ref="thumbnail"
            v-for="(image, index) in images"
            :key="image + '_thumbnail_' + index"
            @click="change(index)"
          >
            <img :src="image" />
          </div>
        </div>
      </transition>
      <span
        class="cool-image-viewer__sequence"
        :style="sequenceStyle"
        v-show="!showThumbnail"
      >
        {{ curIndex + 1 }} / {{ images.length }}
      </span>
    </div>
  </transition>
</template>

<script>
import "./assets/iconfont.css";
import { on, off, isFirefox, rafThrottle } from "./utils/util";
const Mode = {
  CONTAIN: {
    name: "contain",
    icon: "icon-full-screen",
  },
  ORIGINAL: {
    name: "original",
    icon: "icon-c-scale-to-original",
  },
};
const mousewheelEventName = isFirefox() ? "DOMMouseScroll" : "mousewheel";
export default {
  name: "ImageViewer",
  data() {
    return {
      options: {},
      handlePosition: "top",
      mode: Mode.CONTAIN,
      visible: false,
      images: [],
      curIndex: 0,
      zIndex: 2000,
      maskBgColor: "",
      showDownload: false,
      isMouseEnterThumbnail: false,
      thumbnailTransitionShow: false,
      showThumbnail: false,
      transform: {
        scale: 1,
        deg: 0,
        rotateY: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      },
    };
  },
  computed: {
    isSingle() {
      return this.images.length <= 1;
    },
    isFirst() {
      return this.curIndex === 0;
    },
    isLast() {
      return this.curIndex === this.images.length - 1;
    },
    sequenceStyle() {
      if (this.handlePosition == "bottom") {
        return {
          top: "10px",
          bottom: "auto",
        };
      }
      return {
        bottom: "10px",
        top: "auto",
      };
    },
    actionStyle() {
      if (this.handlePosition == "bottom") {
        return {
          bottom:
            this.showThumbnail && this.images && this.images.length > 1
              ? "100px"
              : "30px",
          top: "auto",
        };
      }
      return {
        top: "30px",
        bottom: "auto",
      };
    },
    imgStyle() {
      const { scale, deg, rotateY, offsetX, offsetY, enableTransition } =
        this.transform;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) rotateY(${rotateY}deg)`,
        transition: enableTransition ? "transform .3s" : "",
        "margin-left": `${offsetX}px`,
        "margin-top": `${offsetY}px`,
      };
      if (this.mode === Mode.CONTAIN) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    },
  },
  mounted() {
    this.deviceSupportInstall();
    this.visible = true;
  },
  methods: {
    mouseEnterThumbnail(e) {
      this.isMouseEnterThumbnail = e;
    },
    change(index) {
      if (!this.showThumbnail) {
        return;
      }
      this.curIndex = index;
      let vmEl = this.$refs.thumbnail;
      if (!vmEl) return;
      let width = vmEl.clientWidth;
      let scrollLeft = vmEl.scrollLeft;
      let cur = vmEl.children[index].offsetLeft;
      if (width - cur < 160) {
        if (width - cur < 0 && scrollLeft === 0) {
          this.$refs.thumbnail.scrollLeft = cur - width + 160;
        } else {
          this.$refs.thumbnail.scrollLeft = scrollLeft + 80;
        }
      } else if (cur - scrollLeft < 80) {
        this.$refs.thumbnail.scrollLeft = cur - 120;
      }
    },
    pre() {
      if (this.isFirst) return;
      const len = this.images.length;
      this.curIndex = (this.curIndex - 1 + len) % len;
      this.change(this.curIndex);
    },
    next() {
      if (this.isLast) return;
      const len = this.images.length;
      this.curIndex = (this.curIndex + 1) % len;
      this.change(this.curIndex);
    },
    handleMouseDown(e) {
      if (e.button !== 0) return;
      const { offsetX, offsetY } = this.transform;
      const startX = e.pageX;
      const startY = e.pageY;
      this._dragHandler = rafThrottle((ev) => {
        this.transform.offsetX = offsetX + ev.pageX - startX;
        this.transform.offsetY = offsetY + ev.pageY - startY;
      });
      on(document, "mousemove", this._dragHandler);
      on(document, "mouseup", () => {
        off(document, "mousemove", this._dragHandler);
      });
      e.preventDefault();
    },
    deviceSupportInstall() {
      this._keyDownHandler = (e) => {
        e.preventDefault();
        const keyCode = e.keyCode;
        switch (keyCode) {
          case 17:
            this.handleActions("mirror");
            break;
          case 18:
            this.handleActions("clockwise");
            break;
          // ESC
          case 27:
            this.close();
            break;
          // SPACE
          case 32:
            this.toggleMode();
            break;
          // LEFT_ARROW
          case 37:
            this.pre();
            break;
          // UP_ARROW
          case 38:
            this.handleActions("zoomIn");
            break;
          // RIGHT_ARROW
          case 39:
            this.next();
            break;
          // DOWN_ARROW
          case 40:
            this.handleActions("zoomOut");
            break;
        }
      };
      this._mouseWheelHandler = rafThrottle((e) => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
        if (this.isMouseEnterThumbnail) {
          let moveForwardStep = -1;
          let moveBackStep = 1;
          let step = 0;
          step = delta > 0 ? moveForwardStep * 50 : moveBackStep * 50;
          this.$refs.thumbnail.scrollLeft =
            this.$refs.thumbnail.scrollLeft + step;
        } else {
          if (delta > 0) {
            this.handleActions("zoomIn", {
              zoomRate: 0.015,
              enableTransition: false,
            });
          } else {
            this.handleActions("zoomOut", {
              zoomRate: 0.015,
              enableTransition: false,
            });
          }
        }
      });
      on(document, "keydown", this._keyDownHandler);
      on(document, mousewheelEventName, this._mouseWheelHandler);
    },
    deviceSupportUninstall() {
      off(document, "keydown", this._keyDownHandler);
      off(document, mousewheelEventName, this._mouseWheelHandler);
      this._keyDownHandler = null;
      this._mouseWheelHandler = null;
    },
    reset() {
      this.transform = {
        scale: 1,
        deg: 0,
        rotateY: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false,
      };
    },
    toggleMode() {
      const modeNames = Object.keys(Mode);
      const modeValues = Object.values(Mode);
      const index = modeValues.indexOf(this.mode);
      const nextIndex = (index + 1) % modeNames.length;
      this.mode = Mode[modeNames[nextIndex]];
      this.reset();
    },
    handleActions(action, options = {}) {
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true,
        ...options,
      };
      const { transform } = this;
      switch (action) {
        case "zoomOut":
          if (transform.scale > 0.2) {
            transform.scale = parseFloat(
              (transform.scale - zoomRate).toFixed(3)
            );
          }
          break;
        case "zoomIn":
          transform.scale = parseFloat((transform.scale + zoomRate).toFixed(3));
          break;
        case "clockwise":
          transform.deg += rotateDeg;
          break;
        case "anticlockwise":
          transform.deg -= rotateDeg;
          break;
        case "mirror":
          transform.rotateY += 180;
          break;
      }
      transform.enableTransition = enableTransition;
    },
    handleTapClose() {
      this.close();
    },
    download() {
      this.$emit("download", this.images[this.curIndex]);
    },
    close() {
      this.deviceSupportUninstall();
      this.visible = false;
      this.thumbnailTransitionShow = false;
      setTimeout(() => {
        this.$emit("close");
        this.$destroy();
        if (this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el);
        }
      }, 300);
    },
    initOptions(options) {
      this.options = options;
      this.images = options.images || [];
      this.curIndex = options.curIndex || 0;
      this.showDownload = options.showDownload;
      this.zIndex = options.zIndex;
      this.showThumbnail = options.showThumbnail;
      this.maskBgColor = options.maskBgColor;
      this.handlePosition = options.handlePosition;
      this.$nextTick(() => {
        this.thumbnailTransitionShow = true;
      });
    },
  },
};
</script>

<style>
.cool-image-viewer__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.cool-image-viewer__mask {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.cool-image-viewer__image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
.cool-image-viewer__image:active {
  cursor: move;
}
.viewer-fade-enter-active {
  animation: viewer-fade-in 0.3s;
}

.viewer-fade-leave-active {
  animation: viewer-fade-out 0.3s;
}
@keyframes viewer-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes viewer-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
.thumbnail-fade-enter-active {
  animation: thumbnail-fade-in 0.5s;
}
.thumbnail-fade-leave-active {
  animation: thumbnail-fade-out 0.5s;
}

@keyframes thumbnail-fade-in {
  0% {
    transform: translateX(-50%) translateY(80px);
    opacity: 0;
  }
  100% {
    transform: translateX(-50%) translateY(0px);
    opacity: 1;
  }
}

@keyframes thumbnail-fade-out {
  0% {
    transform: translateX(-50%) translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(80px);
    opacity: 0;
  }
}
.cool-image-viewer__sequence {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  user-select: none;
  color: #ffffff;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
}
.cool-image-viewer__actions {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  height: 44px;
  padding: 0 23px;
  background-color: #222222;
  opacity: 0.8;
  border-color: #fff;
  border-radius: 8px;
}
.cool-image-viewer_actions__inner {
  width: 100%;
  height: 100%;
  text-align: justify;
  cursor: default;
  font-size: 23px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.cool-image-viewer_actions__inner span {
  margin-left: 6px;
  margin-right: 6px;
  cursor: pointer;
}
.cool-image-viewer__wrapper .iconfont {
  font-size: 23px;
}
.cool-image-viewer__btn {
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  opacity: 0.8;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
}
.cool-image-viewer__close {
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  font-size: 24px;
  color: #fff;
  background-color: #606266;
}
.cool-image-viewer__next,
.cool-image-viewer__pre {
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #fff;
  background-color: #606266;
  border-color: #fff;
}
.cool-image-viewer__pre {
  left: 40px;
}
.cool-image-viewer__next {
  right: 40px;
  text-indent: 2px;
}
.cool-image-viewer__thumbnail {
  position: absolute;
  z-index: 1;
  bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  left: 50%;
  transform: translateX(-50%);
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 6px;
  box-sizing: border-box;
  background-color: #222222;
  max-width: 80%;
  border-radius: 8px;
}
.cool-image-viewer__thumbnail__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 60px;
  max-width: 100px;
  margin: 0px 2px;
  background-color: rgb(49, 49, 49);
  border: 2px solid transparent;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
}
.cool-image-viewer__thumbnail__inner.current {
  border: 2px solid #ffffff;
}
.cool-image-viewer__thumbnail img {
  max-height: 100%;
  max-width: 100%;
}
.cool-image-viewer__thumbnail::-webkit-scrollbar {
  width: 8px;
  height: 5px;
  background-color: transparent;
}

.cool-image-viewer__thumbnail::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

.cool-image-viewer__thumbnail::-webkit-scrollbar-thumb {
  border-radius: 5px;
  border: 3px solid rgba(2, 2, 2, 0.8);
  border-top-width: 1px;
  background-color: rgba(255, 255, 255, 0.4);
}
.cool-image-viewer__thumbnail::-webkit-scrollbar-thumb:hover {
  border: 1px solid rgba(2, 2, 2, 0.8);
}
.cool-image-viewer__thumbnail::-webkit-scrollbar-button {
  background-color: transparent;
  width: 2px;
}
</style>
