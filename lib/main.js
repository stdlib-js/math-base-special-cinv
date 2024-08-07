/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var abs = require( '@stdlib/math-base-special-abs' );
var max = require( '@stdlib/math-base-special-max' );
var FLOAT64_BIGGEST = require( '@stdlib/constants-float64-max' );
var FLOAT64_SMALLEST = require( '@stdlib/constants-float64-smallest-normal' );
var EPS = require( '@stdlib/constants-float64-eps' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );


// VARIABLES //

var LARGE_THRESHOLD = FLOAT64_BIGGEST * 0.5;
var SMALL_THRESHOLD = FLOAT64_SMALLEST * ( 2.0 / EPS );
var RECIP_EPS_SQR = 2.0 / ( EPS * EPS );


// MAIN //

/**
* Computes the inverse of a double-precision complex floating-point number.
*
* ## References
*
* -   Baudin, Michael, and Robert L. Smith. 2012. "A Robust Complex Division in Scilab." _arXiv_ abs/1210.4539 \[cs.MS\] (October): 1–25. <https://arxiv.org/abs/1210.4539>.
*
* @param {Complex128} z - complex number
* @returns {Complex128} result
*
* @example
* var Complex128 = require( '@stdlib/complex-float64-ctor' );
* var real = require( '@stdlib/complex-float64-real' );
* var imag = require( '@stdlib/complex-float64-imag' );
*
* var v = cinv( new Complex128( 2.0, 4.0 ) );
* // returns <Complex128>
*
* var re = real( v );
* // returns 0.1
*
* var im = imag( v );
* // returns -0.2
*/
function cinv( z ) {
	var ab;
	var re;
	var im;
	var s;
	var r;
	var t;

	re = real( z );
	im = imag( z );
	ab = max( abs(re), abs(im) );
	s = 1.0;
	if ( ab >= LARGE_THRESHOLD ) {
		re *= 0.5;
		im *= 0.5;
		s *= 0.5;
	} else if ( ab <= SMALL_THRESHOLD ) {
		re *= RECIP_EPS_SQR;
		im *= RECIP_EPS_SQR;
		s *= RECIP_EPS_SQR;
	}
	if ( abs( im ) <= abs( re ) ) {
		r = im / re;
		t = 1.0 / ( re + (im*r) );
		re = t;
		im = -r * t;
	} else {
		r = re / im;
		t = 1.0 / ( im + (re*r) );
		re = r * t;
		im = -t;
	}
	re *= s;
	im *= s;
	return new Complex128( re, im );
}


// EXPORTS //

module.exports = cinv;
