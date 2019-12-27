# inviewClass
addClass helper on scroll.


## Overview
- add class when elements enter.
- add second class on specified interval for reseting css will-change property.

 
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
