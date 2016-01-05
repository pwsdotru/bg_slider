# BG Slider

BG Slider - plugin for jQuery

The bg slider is plugin for jQuery. It allow slide images on background for any container with any data: text, images, forms and etc.

For this plugin you should use jQuery. Plugin tested with jQuery 1.x

Plugin allow use custom options:

- **timeout** - time in seconds for show each slide;
- **speed** - time in seconds for switch slides.

## Usage

1. Define container and set list of images for slider in attribute *data-sliders*

``` html
<div data-sliders="demo/img1.jpg;demo/img2.jpg;demo/img3.jpg;demo/img4.jpg" id="demo"> ... </div>
```
2.Run slider

2.1 with default options

``` javascript
$('#demo').bg_slider();
```

2.2 or with custom options

``` javascript
$('#demo').bg_slider({timeout: 10, speed: 2});
``` 

## Live Demo

Live demo in folder **demo**

## Credits

- [Aleksandr Novikov](https://github.com/pwsdotru)