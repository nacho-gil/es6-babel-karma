# Transpile ES6 and test through Karma

With this setup you can wite modular ES6 code and test it [Karma](http://karma-runner.github.io/). In order to transpile modules the JavaScript is bundled up through Browserify and then passed through Babelify before running Jasmine tests.

## Initial installation

```sh
npm install
```

## Unit tests

Tests are also written using ES6.

```sh
npm run test
```

## ESLint

Style check with [ESLint](http://eslint.org/), which works nicely with ES6 as well as JSX, and [babel-eslint](https://github.com/babel/babel-eslint) pluggable parser to lint any valid Babel code.

```sh
npm run lint
```