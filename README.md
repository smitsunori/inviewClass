# inviewClass
inviewClass is jQuery plugin that helps adding class on scroll.<br>
要素が画面内に入ったらクラスを付与する jQuery プラグインです。クラス付与後に別のクラスを付与できます。


## Overview
- add class when elements enter.
- add second class on specified interval for reseting css will-change property.


- 要素が画面に入ったらクラスを付与します。
- クラスを付与した後指定した時間の経過後に別のクラスを付与することで、will-changeプロパティの解除などが行えます。

## Demo
https://smitsunori.github.io/inviewClass/

 
## Usage
Select elements to add class.<br>
クラスを付与したい要素を指定します。

```
$('.your-item').inviewClass();
```


### options
settings below are defualt parameters.<br>
以下はデフォルトの設定です。

```
$('.your-item').inviewClass({
  className: 'is-inview',
  secondClassName: 'is-inview-done',
  visibleOffset: 200,
  secondClassInterval: 1000
});
```

- className: 画面内に要素が入った時に付与されるクラス名を指定します。
- secondClassName: 指定時間経過後に付与されるクラス名を指定します。
- visibleOffset: 画面内に要素が入ってからクラスが付与されるまでの距離をpxで指定します。
- seconClassInterval: 最初クラスが付与されてから次のクラスが付与されるまでの時間をmsで指定します。



#### Dependencies
jQuery 1.7+


#### Licence
MIT License
