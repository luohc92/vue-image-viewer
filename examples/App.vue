<template>
  <div id="app">
    <div
      class="image-item"
      @click="handleTapImage(index)"
      v-for="(url, index) in images"
      :key="url + index"
    >
      <img :src="url" width="80" height="80" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      images: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
      ],
    };
  },
  methods: {
    handleTapImage(curIndex) {
      this.$imageViewer({
        images: this.images,
        curIndex: curIndex,
        zIndex: 3000,
        showDownload: true,
        showThumbnail: true,
        handlePosition: "bottom",
        maskBgColor: "rgba(0,0,0,0.7)",
        onClose: () => {
          console.log("close");
        },
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.image-item {
  padding: 10px;
}
</style>
