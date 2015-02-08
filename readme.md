# leap-year [![Build Status](https://travis-ci.org/datetime/leap-year.svg?branch=master)](https://travis-ci.org/datetime/leap-year)

> Check if a year is a [leap year](http://en.wikipedia.org/wiki/Leap_year)


## Install

```
$ npm install --save leap-year
```


## Usage

```js
var leapYear = require('leap-year');

leapYear(2014);
//=> false

leapYear(2016);
//=> true
```


## API

### leapYear([year])

#### year

Type: `number`  
Default: current year

### leapYear([date])

#### date

Type: `date`  
Default: `new Date()`


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
