// hw9-IA.js
// COMP 484 JavaScript Coding Exercises — Solutions
// Run with: node hw9-IA.js

// -------------------------------
// Set 1: Advanced Syntax, Types, and Quirks
// -------------------------------

// Exercise 1
var finalExpressionResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Exercise 1:", finalExpressionResult);

// Exercise 2
var projectIdentifier = "COMP484";
// Attempt with incorrect casing would refer to a different identifier and not reassign `projectIdentifier`.
// ProjectIdentifier = "JS_Advanced"; // <-- would throw ReferenceError because identifiers are case sensitive.
projectIdentifier = "JS_Advanced";
console.log("Exercise 2:", projectIdentifier);

// Exercise 3
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
console.log("Exercise 3:", courseDescription);

// Exercise 4
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log("Exercise 4:", errorMessage);

// Exercise 5
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB;
var resultMultiplication = valueA * valueB;
console.log("Exercise 5 results:", resultSubtraction, resultMultiplication);
console.log("Exercise 5 typeof resultSubtraction:", typeof resultSubtraction);
console.log("Exercise 5 typeof resultMultiplication:", typeof resultMultiplication);

// -------------------------------
// Set 2: Operators and Type Theory
// -------------------------------

// Exercise 6
var unassignedVar;
var explicitNull = null;
console.log("Exercise 6 typeof unassignedVar:", typeof unassignedVar);
console.log("Exercise 6 typeof explicitNull:", typeof explicitNull);
/*
`typeof null` returns "object" due to a long-standing quirk in JavaScript's original
implementation, where values were tagged in a way that caused null to be identified
as an object. This behavior is standardized for backward compatibility.
*/

// Exercise 7
var isBlocking = true;
console.log("Exercise 7 typeof after boolean assignment:", typeof isBlocking);
isBlocking = "true";
console.log("Exercise 7 typeof after string assignment:", typeof isBlocking);

// Exercise 8
// 1) var 2fast = 1; // Invalid: identifiers cannot start with a number.
// 2) var my var = 2; // Invalid: spaces are not allowed in variable names.
// 3) var user-name = 3; // Invalid: hyphen is not allowed in identifiers (interpreted as subtraction).

// Exercise 9
var counterValue = 50;
counterValue /= 5;
counterValue -= 3;
console.log("Exercise 9:", counterValue);

// Exercise 10
var x = 10;
var y_post = x++; // Postfix: assign first, then increment.
console.log("Exercise 10 (postfix) y_post:", y_post, "x:", x);
x = 10;
var z_pre = ++x; // Prefix: increment first, then assign.
console.log("Exercise 10 (prefix) z_pre:", z_pre, "x:", x);
// In postfix (x++), `y_post` gets the old value and x increments afterward.
// In prefix (++x), x increments first and `z_pre` gets the new value.

// -------------------------------
// Set 3: Advanced Logic and Comparisons
// -------------------------------

// Exercise 11
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
  console.log("Exercise 11: 0 == false due to type coercion.");
}
// JavaScript coerces false to 0 in loose equality, so the comparison is true.

// Exercise 12
var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB) {
  console.log("Exercise 12: Not strictly equal (different types).");
} else {
  console.log("Exercise 12: Strictly equal.");
}

// Exercise 13
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;
if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
  console.log("Exercise 13: Access granted");
} else {
  console.log("Exercise 13: Access denied");
}

// Exercise 14
var conditionA = true;
var conditionB = false;
if ((conditionA || conditionB) && !(conditionA && conditionB)) {
  console.log("Exercise 14: XOR Success");
} else {
  console.log("Exercise 14: XOR Fail");
}

// Exercise 15
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType === "deferred") {
  loadStatus = "Non-blocking";
} else {
  loadStatus = "Potentially Blocking";
}
var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log("Exercise 15:", loadStatus, loadStatusTernary);

// -------------------------------
// Set 4: Integration and Application
// -------------------------------

// Exercise 16
/*
calculateRenderTime is intended to compute the total time required to render a page,
including parsing HTML and executing JavaScript, returning a duration in milliseconds.
*/
function calculateRenderTime() {
  // Implementation would go here.
}
console.log("Exercise 16: calculateRenderTime defined");

// Exercise 17
var now = new Date();
var mm = (now.getMonth() + 1).toString().padStart(2, "0");
var dd = now.getDate().toString().padStart(2, "0");
var yyyy = now.getFullYear().toString();
var formattedDate = "Today is " + mm + "/" + dd + "/" + yyyy;
console.log("Exercise 17:", formattedDate);

// Exercise 18
var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;
var diffResult = val1 - val2;
console.log("Exercise 18 sumResult:", sumResult);
console.log("Exercise 18 diffResult:", diffResult);
/*
The + operator performs string concatenation when one operand is a string,
so 20 + "5" becomes the string "205". Other arithmetic operators like -, *, /
coerce strings to numbers; therefore, 20 - "5" yields the numeric 15.
*/

// Exercise 19
var dataInput = 484;
if (typeof dataInput === "number") {
  console.log("Exercise 19: Input is numeric.");
} else {
  dataInput = true;
  console.log("Exercise 19 new type:", typeof dataInput);
}

// Exercise 20
/*
If this script runs in the <head> without defer/async, it may execute before
the body exists. Querying elements (or document.body) too early can be null,
leading to errors like "Cannot set property 'innerHTML' of null". Placing the
script at the end of the body, or using defer/async (with DOMContentLoaded),
prevents this timing issue.
*/
var h1 = document.createElement("h1");
h1.innerHTML = "Interactive Layer Loaded";
if (document && document.body) {
  document.body.appendChild(h1);
} else {
  // Fallback if executed too early; queue for DOMContentLoaded.
  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(h1);
  });
}
console.log("Exercise 20: H1 injection attempted");
