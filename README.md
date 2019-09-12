# dynamic-base

This is a tool for automatically setting the base href to any given origin

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
