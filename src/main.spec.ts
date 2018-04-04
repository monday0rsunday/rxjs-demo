import { hot, expectObservable, flush } from './marble-helper';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

describe('Marble', () => {
	const values = {
		b: 1,
		c: 2
	};

	it('merge should be equals', () => {
		var sub1$ = hot('----a--^--b-------c--|');
		var sub2$ = hot(  '---d-^--e---------f-----|');
		var expected =         '---(be)----c-f-----|';
		var actual$ = sub1$.merge(sub2$);

		expectObservable(actual$).toBe(expected);
		flush();
	});

	it('map should be equals', () => {
		var sub$ = hot('----a--^--b-------c---|', values);
		var expected =         '---b-------c---|';
		var actual$ = sub$.map(e => e + e)

		expectObservable(actual$).toBe(expected, {b: 2, c: 4});
		flush();
	});

	it('switch should be equals', () => {
		var sub$ = hot('----a--^--b-------c---|', values);
		var expected =        '---(bb)----(cc)|';
		var actual$ = sub$.map(e => Observable.from([e, e])).switch()

		expectObservable(actual$).toBe(expected, values);
		flush();
	});
});