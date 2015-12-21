'use strict';
var regexOccurrence = require('regex-occurrence');
var escape = require('escape-string-regexp');
module.exports = function (input, search, opts) {
	if (typeof input !== 'string') {
		throw new TypeError('The input should be a string');
	}

	opts = opts || {caseInsensitive: true};

	var flags = 'g';

	if (opts.caseInsensitive === true) {
		flags += 'i';
	}

	return regexOccurrence(input, [].concat(search).map(function (search) {
		return new RegExp(escape(search), flags);
	}));
};
