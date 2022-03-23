// 导入组件，组件必须声明 name
import ImageViewer from "./image-viewer";
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.prototype.$imageViewer = ImageViewer;
}
// 为组件添加 install 方法，用于按需引入
ImageViewer.install = (Vue) => {
  Vue.prototype.$imageViewer = ImageViewer;
};

export default ImageViewer;
