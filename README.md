# vue-image-viewer

## Install

```
npm i @luohc92/vue-image-viewer

```

## Usage

```
import ImageViewer from "@luohc92/vue-image-viewer";
Vue.use(ImagePreview)
```

```
  this.$imageViewer({
    images: images,
    curIndex: 0,
    zIndex: 2000,
    showDownload: true,
    showThumbnail: true,
    handlePosition: "bottom",
    maskBgColor: "rgba(0,0,0,0.7)",
    onClose: () => {
      console.log("close");
    },
  });
```

### Props

| Name           | Type                | Required | Description                                       | Default         |
| -------------- | ------------------- | -------- | ------------------------------------------------- | --------------- |
| images         | Array               | true     | images source 图片源                              | []              |
| curIndex       | Number              | false    | default display image 默认显示图片                | 0               |
| zIndex         | Number              | false    | set image viewer z-index 设置图片查看器的 z-index | 2000            |
| showDownload   | Boolean             | false    | show download button 显示下载按钮                 | false           |
| showThumbnail  | Boolean             | false    | show images thumbnail 显示图片缩略图              | false           |
| handlePosition | String [top,bottom] | false    | set handle position 设置操作柄显示位置            | bottom          |
| maskBgColor    | String              | false    | set mask background color 设置遮罩背景颜色        | rgba(0,0,0,0.7) |
| onClose        | Function            | false    | close function callback 关闭方法回调              | null            |
| onDownload     | Function            | false    | download image function callback 关闭方法回调     | null            |
