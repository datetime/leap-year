'use strict';
var assert = require('assert');
var leapYear = require('./');

it('should check if a year is a leap year', function () {
	assert(!leapYear(2014));
	assert(leapYear(2016));
	assert(leapYear(new Date(2016, 0)));
	assert(typeof leapYear() === 'boolean');
});
