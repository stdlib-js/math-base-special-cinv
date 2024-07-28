<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cinv

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the inverse of a double-precision complex floating-point number.

<section class="intro">

The inverse (or reciprocal) of a non-zero complex number `z = a + bi` is defined as

<!-- <equation class="equation" label="eq:complex_inverse" align="center" raw="{\frac {1}{z}}=\frac{\bar{z}}{z{\bar{z}}} = \frac{a}{a^{2}+b^{2}} - \frac{b}{a^2+b^2}i." alt="Complex Inverse" > -->

<div class="equation" align="center" data-raw-text="{\frac {1}{z}}=\frac{\bar{z}}{z{\bar{z}}} = \frac{a}{a^{2}+b^{2}} - \frac{b}{a^2+b^2}i." data-equation="eq:complex_inverse">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@026bc0ee34051ddb44f3222f620bc7a300b9799e/lib/node_modules/@stdlib/math/base/special/cinv/docs/img/equation_complex_inverse.svg" alt="Complex Inverse">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
cinv = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cinv@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cinv = require( 'path/to/vendor/umd/math-base-special-cinv/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cinv@v0.2.2-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cinv;
})();
</script>
```

#### cinv( z )

Computes the inverse of a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );

var v = cinv( new Complex128( 2.0, 4.0 ) );
// returns <Complex128>

var re = real( v );
// returns 0.1

var im = imag( v );
// returns -0.2
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cinv@v0.2.2-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var z1;
var z2;
var i;

for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( uniform( -50.0, 50.0 ), uniform( -50.0, 50.0 ) );
    z2 = cinv( z1 );

    console.log( '1.0 / (%s) = %s', z1.toString(), z2.toString() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



* * *

<section class="references">

## References

-   Smith, Robert L. 1962. "Algorithm 116: Complex Division." _Commun. ACM_ 5 (8). New York, NY, USA: ACM: 435. doi:[10.1145/368637.368661][@smith:1962a].
-   Stewart, G. W. 1985. "A Note on Complex Division." _ACM Trans. Math. Softw._ 11 (3). New York, NY, USA: ACM: 238–41. doi:[10.1145/214408.214414][@stewart:1985a].
-   Priest, Douglas M. 2004. "Efficient Scaling for Complex Division." _ACM Trans. Math. Softw._ 30 (4). New York, NY, USA: ACM: 389–401. doi:[10.1145/1039813.1039814][@priest:2004a].
-   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS] (October): 1–25. [&lt;https://arxiv.org/abs/1210.4539>][@baudin:2012a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/ops/cdiv`][@stdlib/math/base/ops/cdiv]</span><span class="delimiter">: </span><span class="description">divide two complex numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cinv.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cinv

[test-image]: https://github.com/stdlib-js/math-base-special-cinv/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/math-base-special-cinv/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cinv/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cinv?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cinv.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cinv/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cinv/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-cinv/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-cinv/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-cinv/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-cinv/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-cinv/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-cinv/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cinv/main/LICENSE

[@smith:1962a]: https://doi.org/10.1145/368637.368661

[@stewart:1985a]: https://doi.org/10.1145/214408.214414

[@priest:2004a]: https://doi.org/10.1145/1039813.1039814

[@baudin:2012a]: https://arxiv.org/abs/1210.4539

<!-- <related-links> -->

[@stdlib/math/base/ops/cdiv]: https://github.com/stdlib-js/math-base-ops-cdiv/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
