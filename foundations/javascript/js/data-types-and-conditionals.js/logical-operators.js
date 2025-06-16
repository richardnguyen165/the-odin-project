/*
Logical Operators

Three types && || !
 */

/* 
Falsy Values (everything not in this list is truthy values)
0
""
null
undefined
NaN
false
*/

/*
OR ||

OR does short-circuit evaluation, which finds the first truthy evaluation
(and since one or more results in the expression being true, does not evaluate the rest of the expression)
*/

// Truth Table
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


/*
AND &&

AND does short-circuit evaluation, which finds the first falsy evaluation
(and since one or more results in the expression being false, does not evaluate the rest of the expression)
*/

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

/*
NOT !
negates the evalutation of the boolean
*/

alert( !true ); // false
alert( !0 ); // true

