### Description

This is demo project on using RxJs by using [Marble Tests](https://github.com/ReactiveX/rxjs/blob/5.5.8/doc/writing-marble-tests.md)

Required libraries are:

* RxJx 5.5.8: Main required library
* Typescript 2.8.1: Project is written by typescript
* ts-node: Utility for running `*.ts` directly
* Mocha: Test runner
* Chai: Test assertion

### How to run specific `*.ts` file

* Use npm scripts

```sh
npm run exec -- src/example.ts
```

### How to write tests

* Create `*.spec.ts` file

```sh
touch src/example.spec.ts
```

* In created file, import all function from `marble-helper.ts`

```ts
import { hot, expectObservable, flush } from './marble-helper';
```

* Run tests by using npm scripts

```sh
npm run test
```