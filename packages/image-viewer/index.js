import ImageViewer from "./index.vue";
import { downImage } from "./utils/util";
import Vue from "vue";
const fn = () => {
  return;
};
const defaultOptions = {
  curIndex: 0,
  images: [],
  showDownload: false,
  showThumbnail: false,
  handlePosition: 'top',
  onClose: fn,
  onDownload: fn,
  zIndex: 2000,
  maskBgColor: "rgba(0,0,0,0.5)",
};
const ImageViewerCtor = Vue.extend(ImageViewer);
export default function imageViewer(options = defaultOptions) {
  let instance = new ImageViewerCtor();
  instance.initOptions({
    ...defaultOptions,
    ...options,
  });

  instance.$mount();
  document.body.appendChild(instance.$el);

  instance.$on("close", function () {
    if (options.onClose) {
      options.onClose();
    }
  });
  instance.$on("download", function (e) {
    if (options.onDownload) {
      options.onDownload(e);
    } else {
      downImage(e);
    }
  });

  return {
    $instance: instance,
    close: instance.close,
  };
}
