# 图片裁剪组件
> 基于cropperjs进行封装。

## 0.说明

## 1.props

* uploadUrl：自动上传的服务地址，如需要手动上传，则为空即可

## 2.事件

* crop：裁剪事件。返回裁剪图片的blob。可以用于上传，或者转为base64(URL.createObjectURL(blob))后进行展示
* upload-err：上传失败事件。如果配置了上传链接，但是上传失败时，触发

