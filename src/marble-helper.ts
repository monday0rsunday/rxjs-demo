import { TestScheduler } from 'rxjs/testing/TestScheduler';
import { assert } from 'chai';

let testScheduler = new TestScheduler(assert.deepEqual);
export function hot(marbles, values?){
	return testScheduler.createHotObservable(marbles, values);
}

export function expectObservable(o$){
	return testScheduler.expectObservable(o$);
}

export function flush() {
	testScheduler.flush();
}