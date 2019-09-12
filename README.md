# dynamic-base

 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Join the chat at https://gitter.im/dynamic-base/dynamic-base](https://badges.gitter.im/dynamic-base/community.svg)](https://gitter.im/dynamic-base/dynamic-base)
[![Last Commit](https://badgen.net/github/last-commit/codymikol/dynamic-base)](https://github.com/codymikol/dynamic-base/issues)
 [![Downloads](https://badgen.net/npm/dt/dynamic-base)](https://www.npmjs.com/package/dynamic-base)
 [![Publish Size](https://badgen.net/bundlephobia/minzip/dynamic-base)](https://bundlephobia.com/result?p=dynamic-base@1.1.1)
  [![Travis Build](https://badgen.net/travis/codymikol/dynamic-base)](https://travis-ci.com/codymikol/dynamic-base)

#### A utility that automatically sets the base href to the origin

#### Compatibility

Currently tested working on

* Firefox
* Chrome
* Safari
* IE11+
* iOS

#### Installation

##### via yarn: `yarn add dynamic-base`
##### via npm : `npm install dynamic-base`

#### Example Usage

Given https://dynamic-base.com:8080/some/suffix/here/other/stuff

```html
<head>
  <script src="/node_modules/dynamic-base/dist/bundle.js"></script>
  <script>window.dynamicBase('/some/suffix/here')</script>
</head>
```
Will automatically append a base tag with the appropriate origin / port to the HEAD tag

### becomes

```html
<head>
  <script src="/node_modules/dynamic-base/dist/bundle.js"></script>
  <script>window.dynamicBase('/some/suffix/here')</script>
  <base href="https://dynamic-base.com:8080/some/suffix/here"/>
</head>
```

When no suffix is specified, it will be defaulted to an empty string.

```html
  <script>window.dynamicBase()</script>
  <base href="https://dynamic-base.com:8080"/>
```

This is useful for sites that are deployed to many different origins but require a specified base href. I have personally had a need for this in angularJS html5mode, but I'm sure there are other applications.
