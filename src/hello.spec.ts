import { Hello } from './hello.ts';
import 'mocha';
import { expect } from 'chai';

describe('Class: Hello', () => {
	it('should return Hello World', () => {
		var hello = new Hello();
		expect(hello.say('World')).to.equal('Hello World');
	});
});