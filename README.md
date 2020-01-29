# inviewClass
inviewClass is jQuery plugin that helps adding class on scroll.<br>
要素が画面内に入ったらクラスを付与する jQuery プラグインです。クラス付与後にさらに別のクラスを追加します。


## Overview
- add class when elements enter.
- add second class on specified interval for reseting css will-change property.


- 要素が画面に入ったらクラスを付与します。
- クラスを付与した後指定した時間の経過後に別のクラスを追加します。

## Demo
https://smitsunori.github.io/inviewClass/

デモでは要素が画面内に入ると付与されるクラスのCSSでopacity, transformを操作し、下から動きつつフェードインさせています。
will-changeを設定してフェードインをスムーズに動かしていますが、要素数が多いとwill-changeのメモリ消費が大きくページのカクツキの原因になったりします。そこで追加されるクラスを利用して不要になったwill-changeを随時解除し、ページ挙動を軽快に保っています。
 
## Usage
Select elements to add class.<br>
クラスを付与したい要素を指定します。

```
$('.your-item').inviewClass();
```


### options
settings below are defualt parameters.<br>

初期設定では画面内に200px以上入ったら最初のクラス「is-inview」が付与され、それから1000ms経過すると次のクラス「is-inview-done」が追加されます。クラス名や数値はオプション設定で変更可能です。オプションの各パラメータ名は以下になります。

```
$('.your-item').inviewClass({
  className: 'is-inview',
  secondClassName: 'is-inview-done',
  visibleOffset: 200,
  secondClassInterval: 1000
});
```

- className: 画面内に要素が入った時に付与されるクラス名を指定します。
- secondClassName: 指定時間経過後に付与されるクラス名を指定します。空文字列を指定するとクラスを追加しません。
- visibleOffset: 画面内に要素が入ってからクラスが付与されるまでの距離をpxで指定します。
- seconClassInterval: 最初のクラスが付与されてから次のクラスが付与されるまでの時間をmsで指定します。



#### Dependencies
jQuery 1.7+


#### Licence
MIT License
