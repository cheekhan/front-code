## 一、普通参数

### 1.`viewMode`：画布的视图模式

|类型|默认值|说明|
|----|----|----|
|Number|0|视图的模式|

* 0：无限制，裁剪框可以延伸到画布之外
* 1：限制裁剪框不超过画布的大小
* 2：将图完整显示在容器内，即按照图最长边进行展示。如果图和容器比例不同，则容器会留有空白区域。
* 3：按照图最短边，进行完全展示。如果比例不同，图的长边，会超出容器范围，此时可以拖动图片，进行截取

### 2.`dragMode`：拖动模式

|类型|默认值|说明|
|----|----|----|
|String|crop|当鼠标在剪切器范围内移动时的模式|

* crop：创建一个新的剪切窗口，就是可以用鼠标从屏幕上任意划取剪切范围
* move：挪动canvas，就是拖动背景的图移动，剪切框不移动
* none：啥都不做

### 3.`initialAspectRatio`：初始化宽高比
|类型|默认值|说明|
|----|----|----|
|Number|NaN|剪切框的宽高比，默认和图片一致|

只有当aspectRatio被设置后，才能使用NaN

### 4.`aspectRatio`：剪切框比例
|类型|默认值|说明|
|----|----|----|
|Number|NaN|剪切框比例，默认情况是自由比例|

### 5.`data`:cropper状态数据

一个包含了cropper操作的状态对象。
之前存储的数据，在初始化时，会通过`setData`方法进行设置。
`autoCrop `被设置为true时可用。

### 6.`preview`：用于预览

值可以是一个element对象，也可以是选择器。

### 7.`responsive`：
boolean值，默认true；

window 发生resize时，重新绘制

### 8.`restore`：
boolean值，默认true；

当发生resize并且重绘时，是否记住剪切框的区域；

### 9.checkCrossOrigin

### 10.`checkOrientation`：检查图片方向
Boolean值：默认true

是否覆盖图片方向信息

如果是jpeg图，会包含一个图像方向信息；
在一些浏览器上， 会根据这个信息，将图片进行旋转；

### 11.`modal`
Boolean值：默认true

是否启用编辑器底色

### 12.`guides`

Boolean值：默认true

是否启用剪切框定虚线

### 13.`center`

Boolean值：默认true

是否显示裁剪框的中心 十字 标

### 14.`highlight`

Boolean值：默认true

高亮剪切框区域


### 15.`background`
Boolean值：默认true

展示容器的格子背景

### 16.`autoCrop`
Boolean值：默认true

在初始时是否自动裁剪一次图

### 17.`autoCropArea`
一个介于 0到1之间的值。默认0.8；

自动裁剪的范围。

### 18.`movable`
Boolean值：默认true

待裁剪的图片是否可以移动。

### 19.`rotatable`
Boolean值：默认true

待裁剪的图片是否可以旋转。

### 20.`scalable`
Boolean值：默认true

待裁剪的图片是否可以缩放。

### 21.`zoomable`
Boolean值：默认true

待裁剪的图片是否可以缩放。

### 22.`zoomOnTouch`

Boolean值：默认true

待裁剪的图片是否可以拖拽缩放。

### 23.`zoomOnWheel`
Boolean值：默认true

待裁剪的图片是否可以鼠标滚轮缩放。

### 24.`wheelZoomRatio`
Number类型，默认0.1

定义鼠标滚轮进行图片缩放时的速率


### 25.`cropBoxMovable`
Boolean值：默认true

是否可以拖拽来移动裁剪框

### 26.`cropBoxResizable`

Boolean值：默认true

是否可以拖拽来改变裁剪框大小

### 27.`toggleDragModeOnDblclick`
Boolean值：默认true

是否可以通过双击copper来改变viewModul ，使其在"crop" and "move"之间切换

### 28.`minContainerWidth`
Number类型，默认值200

容器的最小宽度。

### 29.`minContainerHeight`
Number类型，默认值100

容器最小高度

### 30.`minCanvasWidth`
Number类型，默认值0 

canvas的最小宽度

### 31.`minCanvasHeight`
Number类型，默认值0 

canvas的最小高度

### 32.`minCropBoxWidth`
Number类型，默认值0 

裁剪框的最小宽度,相对于页面

### 33.`ready`
函数，默认是null。

ready事件的快捷处理函数。
### 34.`cropstart`
函数，默认是null。

cropstart事件的快捷处理函数。

### 35.`cropmove`
函数，默认是null。

cropmove事件的快捷处理函数。

### 36.`cropend`
函数，默认是null。

cropend事件的快捷处理函数。

### 37.`crop`
函数，默认是null。

crop事件的快捷处理函数。

### 38.`zoom`
函数，默认是null。

zoom事件的快捷处理函数。

## 二、函数
> 加载图片时是异步的，所以绝大多数函数，都应在ready之后再调用。

### 1.`crop()`
手动显示裁剪框

### 2.`reset()`
将图片和裁剪框，恢复到初始化状态。

### 3.`clear()`
清空裁剪框

### 4.`replace(url,hasSameSize?:boolean)`
更换原始图的src，并且重新建立cropper。

参数：
* url：string，新的url
* hasSameSize：boolean，默认是false。如果新图和旧图尺寸一样，则直接替换url，不重新建立cropper。

### 5.`disable()`
冻结cropper

### 6.`enable()`
解除冻结cropper

### 7.`destroy()`
销毁cropper，并且从绑定的image元素上销毁实例。

### 8.`move(offsetX[, offsetY])`
移动画布（image的那个容器）。

移动的值可以为负数，且offsetY可以省略。

### 9.`moveTo(x[, y])`
将画布移动到某个绝对位置。

### 10.`zoom(ratio)`
将画布按照某个相对比例进行缩放。
ratio：Number，正数放大，负数缩小

### 11.`zoomTo(ratio[, pivot])`
将画布，以相对于左上角某个位置为中心的点，缩放到一个绝对比例。

ratio参数用来定义比例。

pivot参数是`{ x: Number, y: Number }`，用来定义一个相对于左上角的中心点。

### 12.`rotate(degree)`
旋转原图。

参数degree，类型number，代表角度。大于0时，向右旋转；小于0时，向左旋转。

### 13.`rotateTo(degree)`
将图旋转到某个固定的角度。

### 14.`scale(scaleX[, scaleY])`
修改原图大小。

scaleX，对横坐标进行缩放，类型为number，默认1，即不改变大小。

scaleY，对纵坐标进行缩放，类型为number，缺省状态下，值为scaleX的值。

如果值为负数，则进行翻转，并且再进行缩放。例如-1是翻转，并保持大小不变。

可以单独设置x轴和y轴的缩放，分别使用函数`scaleX(scaleX)`,`scaleY(scaleY)`

### 15.`getData([rounded])`
获取裁剪区域的位置和尺寸，以及原图的旋转角度和缩放信息。

返回值：
```ts
x: the offset left of the cropped area
y: the offset top of the cropped area
width: the width of the cropped area
height: the height of the cropped area
rotate: the rotated degrees of the image
scaleX: the scaling factor to apply on the abscissa of the image
scaleY: the scaling factor to apply on the ordinate of the image
```

### 16.`setData(data)`
给cropper设置信息，其中data参数的值，和`getData()`函数的返回值一样。

### 17.`getContainerData()`
获取容器的尺寸数据。返回
```ts
{
    "width":Number,
    "height":Number
}
```

### 18.`getImageData()`
获取图片的数据，包括尺寸，位置，和其他相关信息.

返回值：
```ts
left: the offset left of the image
top: the offset top of the image
width: the width of the image
height: the height of the image
naturalWidth: the natural width of the image
naturalHeight: the natural height of the image
aspectRatio: the aspect ratio of the image
rotate: the rotated degrees of the image if it is rotated
scaleX: the scaling factor to apply on the abscissa of the image if scaled
scaleY: the scaling factor to apply on the ordinate of the image if scaled
```

### 19.`getCanvasData()`
获取画布的数据，包括位置，尺寸等。

返回值：
```ts
left: the offset left of the canvas
top: the offset top of the canvas
width: the width of the canvas
height: the height of the canvas
naturalWidth: the natural width of the canvas (read only)
naturalHeight: the natural height of the canvas (read only)
```

### 20.`setCanvasData(data)`
设置画布的位置，和尺寸。

参数data的值：
```ts
left: the new offset left of the canvas
top: the new offset top of the canvas
width: the new width of the canvas
height: the new height of the canvas
```

### 21.`getCropBoxData()`
获取剪切框的信息，位置和尺寸。

返回值：
```ts
left: the offset left of the crop box
top: the offset top of the crop box
width: the width of the crop box
height: the height of the crop box
```
### 22.`setCropBoxData(data)`
设置裁剪框的位置和尺寸

参数data：
```ts
left: the offset left of the crop box
top: the offset top of the crop box
width: the width of the crop box
height: the height of the crop box
```

### 23.`getCroppedCanvas([options])`
返回一个从图片裁剪出来的canvas，如果未发生裁剪，就返回整个图片。

入参，object：
* width: 输出canvas的预期宽度
* height:输出canvas的预期高度
* minWidth: the minimum destination width of the output canvas, the default value is 0.
* minHeight: the minimum destination height of the output canvas, the default value is 0.
* maxWidth: the maximum destination width of the output canvas, the default value is Infinity.
* maxHeight: the maximum destination height of the output canvas, the default value is Infinity.
* fillColor: 填充画布中透明区域，默认是透明的，可以设置如`#fff`。注意如果生成JPEG图片，这个值必须进行修改，因为默认值情况下，在生成的图片中，透明区域将展示为黑色。
* imageSmoothingEnabled:boolean，设置图片是否光滑
* imageSmoothingQuality:图片光滑程度，默认是`low`,其他值还可以是`medium`、`high` 

出参：HTMLCanvasElement

可以使用出参，做一些操作，比如获取截取区域的base64进行展示，也可以获取截取区域的blob进行上传文件。

### 24.`setAspectRatio(aspectRatio)`
设置剪切框的比例。
参数为number

### 25.`setDragMode([mode])`
设置拖拽的模式。
参数同`dragMode`：拖动模式




## 三、事件

### 1.`ready`
目标image加载完成，且cropper实例已经可以进行操作

### 2.`cropstart`
当画布，或者裁剪框，开始发生变化时触发。

入参：event对象
* event.detail.originalEvent:Event类型，原始的事件类型
* event.detail.action：事件的种类，
```ts
'crop': 创建裁剪框
'move': 移动画布
'zoom': 触摸拖动画布.
'e': resize the east side of the crop box
'w': resize the west side of the crop box
's': resize the south side of the crop box
'n': resize the north side of the crop box
'se': resize the southeast side of the crop box
'sw': resize the southwest side of the crop box
'ne': resize the northeast side of the crop box
'nw': resize the northwest side of the crop box
'all': move the crop box (all directions)
```

### 3.`cropmove`
当画布，或者裁剪框，正在发生变化时，进行触发

参数和`cropstart`相同。

### 4.`cropend`
当画布或裁剪框，变化结束时触发。

参数和`cropstart`相同。

### 5.`crop`
当画布，或裁剪框，发生变化了，进行触发。

event对象可以获取到变化后的信息
```ts
event.detail.x
event.detail.y
event.detail.width
event.detail.height
event.detail.rotate
event.detail.scaleX
event.detail.scaleY
```

### 6.`zoom`
当画布进行了缩放时，触发。

event参数：
```ts
event.detail.originalEvent:
    Type: Event
    Options: wheel, pointermove, touchmove, and mousemove.
event.detail.oldRatio:
    Type: Number
    The old (current) ratio of the canvas
event.detail.ratio:
    Type: Number
    The new (next) ratio of the canvas (canvasData.width / canvasData.naturalWidth)
```
