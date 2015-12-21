import test from 'ava';
import fn from './';

test('error', t => {
	t.throws(fn.bind(fn, 5, 'foo'), 'The input should be a string');
});

test('occurrences', t => {
	t.is(fn('', 'foo'), 0);
	t.is(fn('foo bar', 'foo'), 1);
	t.is(fn('Foo bar', 'foo'), 1);
	t.is(fn('foo foo bar', 'foo'), 2);
	t.is(fn('foo foo bar', ['foo', 'bar']), 3);
	t.is(fn('foo bar\nfoo baz', 'foo'), 2);
	t.is(fn('(foo) [bar]', '(foo)'), 1);
	t.is(fn('foo bar', 'Foo', {caseInsensitive: false}), 0);
});
