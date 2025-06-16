/*
Comparisions

!== 
===
>=
<=
<
>

Each of these returns a boolean value (true or false)
*/


alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)


/*
Sring comparision

The algorithm to compare two strings is simple:

Compare the first character of both strings.
1. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
2. Repeat until the end of either string.
3. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

In this case, we rea using UNICODE ORDER, NOT ALPHABETCAL ORDER

 */

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true



/*
Comparision of different ypes

when comparing values of different types, JS covnverts the values to numbers
*/

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
alert( true == 1 ); // true
alert( false == 0 ); // true



/*
Strict Equality

== annot diffrentiate 0 from false

or '' from false

('' and 0 are falsy values, so when comparing it would evaluate to true)


Howrever, a strict equality operator checks the equality without type conversion

0 === false would actually return false

theres also !==

*/

alert( null === undefined ); // false
alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true


/* 
Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
*/



alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

/*
Why does it dislike zero so much? Always false!

We get these results because:

Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals null, undefined, and no other value.
Avoid problem
*/