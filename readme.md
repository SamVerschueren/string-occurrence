# string-occurrence [![Build Status](https://travis-ci.org/SamVerschueren/string-occurrence.svg?branch=master)](https://travis-ci.org/SamVerschueren/string-occurrence)

> Get the number of occurrences of a string in a string


## Install

```
$ npm install --save string-occurrence
```


## Usage

```js
const stringOccurrence = require('string-occurrence');

stringOccurrence('foo bar', 'foo');
//=> 1

stringOccurrence('foo bar\nfoo baz', 'foo');
//=> 2

stringOccurrence('foo bar\nfoo baz', ['foo', 'baz']);
//=> 3
```


## API

### stringOccurrence(input, search)

#### input

Type: `string`

The string to search in.

#### search

Type: `string`, `string[]`

The keyword or keywords to search for.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
