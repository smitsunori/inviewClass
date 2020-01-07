# inviewClass
inviewClass is jQuery plugin that helps adding class on scroll.


## Overview
- add class when elements enter.
- add second class on specified interval for reseting css will-change property.

- 要素が画面に入ったらクラスを付与します。
- クラスを付与した後、指定した時間の経過後に別のクラスを付与します。will-changeプロパティの解除を目的としています。

## Demo
https://smitsunori.github.io/inviewClass/

 
## Usage
```
$('.your-item').inviewClass();
```


### options
```
$('.your-item').inviewClass({
  className: 'is-inview',
  secondClassName: 'is-inview-done',
  visibleOffset: 200,
  secondClassInterval: 1000
});
```


#### Dependencies
jQuery 1.7+


#### Licence
MIT License
