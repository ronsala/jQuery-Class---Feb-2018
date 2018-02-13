
// pg 294 - 295
// Funciton Expression - you can store a Function Expression as a property 
// of an Object.  So, it's treated as a Method.  Yet, you must declare them
// in order to use them!  (Consider the Order of your functions.)

var someFunction = function (message) {
    alert("Error: " + message);
}

// Function Declaration creates a Named Function.  You can declare them
// anywhere.

function cutInHalf (value) {
    return value / 2;
}

// pg 296 - 297
// Numbers, Strings and Boolian values are passed to a function as values;
// This is called "passed by value".  The orginal is not changed.

// Objects are "passesd by reference".  Therefore when you send an object
// to a function it DOES change the object outside the function.

// pg. 298 - 299
// JavaScript uses Lexical Scoping; this is Static Scoping and does not 
// change when the program runs.  This means you can tell a variable's
// scope by looking at the code.  (Dynamic Scope CAN change when the 
// program runs)

// Global Variables are defined outside of functions.
// Local Variables are defined inside functions.

// Block Scope DOES NOT APPLY in JavaScipt.  That is, variables defined
// inside a function can be used outside the function.

// pg. 300 - 301 Intro to JavaScript Libraries

// pg. 310 - 311
// ALL functions are objects.  This means that functions have properties
// methods; just like other objects.

// agruments are stored in a parameter list that is an agrument property
// of the function object.  This "list" is like and array.

var isEven = function() {
    return arguments[0] % 2 === 0;
}

var countArgs = function() {
    alert( "num of arguments: " + arguments.length );
}

// This allows you to create functions with optional parameters.

// pg. 312 - 313
// The THIS keyword holds a value that is determined by HOW THE 
// FUNCTION IS INVOKED.  [in an even handler, this refers to the 
// object that raised the event (what got clicked?)]

// The last code snipplet on page 313 is noteworthy.

// A Call sends arguments as an comma-seperated string,
// an an apply sends arguments as an array.

// pg. 314 - 315
// The "call" and "apply" methods of a function let you specify
// the value of the "this" keyword.

// The "bind" method let's you specify the "this" keyword when
// you code or assign the function.

var thisTest = function() {
    if (this === window || this === undefined)  {
        alert( "Called Normally");
    } else { alert( this ); }
}.bind("This can not change");

thisTest();  thisTest.call("Test String"); thisTest.apply(343.4);
// will all display "This can not change"

// pg. 320 321
// native object types: String, Number, Boolean, Date, Array, Function

var today = new Date();

var lastName = "Hopper";  // same as = new String("Hopper");
var taxRate  = .0974;     // same as = new Number(.0974);
var validFlag = true;     // same as = new Boolean(true);
var tasks = [];           // same as = new Array();
var invoice = {};         // same as = new Object();

// To access a property or method, you can use the dot operator or [].
length = lastName.length; // same as lastName["length"];
formattedRate = taxRate.toFixed(4);  // same as taxRate["toFixed"](4);

// pg. 323

var invoice = {
    taxRate : .0975,

    // notice that getSalesTax is stored as property of an object,
    // and this turns into a method of the object.  Inside the method
    // the "this" keyword usually is the object itself.
    getSalesTax : function( subtotal ) {
        return ( subtotal * this.taxRate );
    },

    getTotal : function ( subtotal, salesTax ) {
        return subtotal + salesTax;
    }
};

// pg. 324 - 325

// You can add new properties and methods to an object:
invoice.taxRate = 0.0875;
invoice.getSalesTax = function (subtotal) {
    return (subtotal * this.taxRate);
}

// and you can modify the properties of an object.  and you can 
// delete them also.

delete invoice.taxRate;

// pg. 326 - 327  Object Types
// Constructors allow you to create multiple instances of an object.

// Constructor that creates an Invoice object type
var Invoice = function (taxRate) {
    this.items =[];
    this.taxRate = 0.07;
};

// To add a method to an object type
Invoice.prototype.deleteItem = function( itemCode ) {
    if ( itemCode in this.items ) {
        delete this.items[itemCode];
    };
};

var invoice1 = new Invoice( 0.075 );

// pg. 328 - 329 Introducing Prototypes
// Most OOP Languages use Classes to define and create objects.
// JavaScript uses prototypes to create objects. A prototype is an 
// object and it is CLONED to make a new object.  This is called
// "prototype inheritance"

// pg. 330 - 331
// Why use prototypes in the first place?  Because we can then add a 
// method to just the prototype once and not every (instance) of that
// object.

// pg. 332 - 333  The create method introduced
// The Create method lets you directly specify what object to use as
// an object's prototype.

var obj = Object.create(Object.prototype); //same as = {};

// Factory functions can be used to create custom prototype objects.
// They don't require the use of the "new" keyword.

//    pg. 342 - 343
// I read this but did not prepare any notes.

// pg. 361 - 363  Regular Expressions, Handle Exceptions, and Validate Data
// Regular Expressions are coded patters that can be used to search for 
// matching patterns in strings.

var pattern = new RegExp ("Babbage");
//  or ...
var pattern = /Babbage/;

var inventor = "Charles Babbage";
var programmer = "Ada Lovelace";

alert ( pattern.test (inventor) );   // displays true
alert ( pattern.test( programmer )); // displays false

// For case-insensitive regular expressions
var pattern = new RegExp ("lovelace", "i");
// or..
var pattern = /lovelace/i;

// and to test it...
alert ( pattern.test(programmer) );  //displays true

// pg. 364 -- 367 How  to create regular expression patterns

var string = "The product code is MBT-3461.";
alert ( /MB./.test (string) );  // Display true
alert ( /MB[TF]/.test (string) );  // Display true
alert ( /MBT-\W/.test ( string ) ); // Display false

// pg. 368 - 368  Global Regular Expression

var pattern = new RegExp ("Hopper", "g");
// or ...
var pattern = /Hopper/g;

// pg. 370 - 371

// pg 372 - 373
// At the bottom of page 372 it tells us to cheat.

// pg. 374 - 375 How to handle regular expressions?

// pg. 374 - 375
var calculateFutureValue = function( investment, annualRate, years) {
    if ( investment <= 0 || annualRate <= 0 | years <= 0 ) {
        throw new Error("Please check your entries for validity.");
    }

    var monthlyRate = annualRate / 12 / 100;
    var months = years * 12;
    var futureValue = 0;

    for ( var i = 1; i <= months; i++ ) {
        futureValue = (futureValue + investment) * (1 + monthlyRate);
    }
    return futureValue.toFixed(2);
};

// pg. 376 - 377 Try and Catch

var calculate = function() {
    try {
        var investment = parseFloat ( $("investment").value);
        var annualRate = parseFloat ( $("rate").value);
        var years = parseInt( $("years").value);

        $("futureValue").value =
        calculateFutureValue(investment, annualRate, years);
    } catch(error) {
        alert ( error.message);
        // or you could use this line "throw error;" to do something
        // first to fix it.
        }
}

////////////////////////////////////////////////////////////////////////////////////

// pg. 396 - 397  A few Advanced Topics...
// Events: There are three type of events: HTML, mouse, keyboard events

// pg. 398 - 399

$("button").onclick = eventHandlerName;

var attachEvent = function (node, eventName, handler) {
    if (node.addEventListener) {
        node.addEventListener ( eventName, handler);
    } else if (node.attachEvent) {
        node.attachEvent("on" + eventName, handler);
    }
}

// pg. 400 - 401 How to cancel the default action of an event
// When an event occurs, an Event Object is created. 

var eventHandler = function (e) {
    // the event object sent to the event handler, or window.event
    e = e || window.event;
    
    // Cancel the default event
    if (e.preventDefault) {
        e.preventDefault();     // for most browsers
    } else {
        e.returnValue = false;  // for older versions of IE
    }
}

// pg. 408 - 409  Working with images
// Remember that when a function is used as an event handler the value
// of the this keyword is the object that triggered the event !!!

var showFirstImage = function() {
    // "this" = image that triggered the event
    this.src = "image.jpg";
}
// and...
// <img id="rollover" src="image1.jpg" alt="" />

window.onload = function() {
    // get the img tag
    var image = document.getElementById("rollover");

    // attach event handler
    evt.attach( image, "mouseover", showFirstImage);
}

// pg. 416 - 417  How to use timers

// <fieldset id="upgrade">
//   <p>Upgrade will start in 5 seconds!
//    <input type="button" id="cancel" value="Cancel Upgrade">
// <span id="message">&nbsp;</span> </p>
// </fieldset>

// CSS:  .closed { display: none;}

// Create a variable to hold the reference to the timer; make it
// global so all the functions can access it.
var timer;
var startUpgrade = function() {
    /* code to start the upgrade here */
    $("message").firstChild.nodeValue = "Download setting...";
};
var cancelUpgrade = function() {
    clearTimeout(timer);
    $("upgrade").setAttribute("class", "closed");
}

window.onload = function() {
    timer = setTimeout (startUpgrade, 5000);
    $("cancel").onClick = cancelUpgrade;
}

// pg. 418 - 419

// <h3>Number of seconds on page: <span id="counter">0</span></h3>

//  create global variables to hold the timer and the current count
var timer;
var counter = 0;

// create the function that the timer calls
var updateCounter = function() {
    counter++;
    $("counter").firstChild.nodeValue = counter;
};
// create a timer that calls the updateCounter function repeatedly
window.onload = function() {
    timer = setInterval( updateCounter, 1000);
};

// How to use an anonymous function with the setInterval method
var timer;
var counter = 0;
window.onload = function() {
    timer = setInterval( function() {  // the funciton parameter
                            counter++;
                            $("counter").firstChild.nodeValue = counter;
            },
            1000 );         // The interval timer parameter
    };
// ///////////////////////////////////////////////////////

// pg. 430 - 431
// First we must learn what Scope Chain is.
// Objects outside a function hava Global Scope; those inside: Local Scope
// Same with functions also, Functions outside a function have Global
// scope, and those inside, local scope.  AND Objects have access to their
// own scope AND to the scope of the objects that contain them.  This is 
// the scope chain.

//pg. 431 - 432
// Reference is when an outer function returns an inner function that
// refers to something in the outer function's scope.  This causes a "closure"
// to the function that is used even when the outside function is out
// of scope.

var createClickCounter = function() {
    var count = 0;
    var clickCounter = function() {
        count++;
        // the value of "this" is the clicked element
        console.log(this.id + " Count is " + count);
    }
    // returning the inner function, or closure, keeps the variables it
    // refers to "alive", even after the outer function is out of scope
    return clickCounter;
};

window.onload = funciton() {
    $("fist_button").onClick = createClickCounter();
    $("second_button").onClick = createClickCounter();

    console.log(count);  // ReferenceError .. as count is not defined.
}

// pg. 434 - 435  The rollover function uses Closure.

// pg. 436 - 437 How to use Closures
// An example of rewritting the code for the creating a slide show

// pg. 438 - 439
// IIFE = Immediatlely invoked function expression (IIFE)

var sayHello = function() {   // define function
    console.log("Hello");
};
sayHello();   // invoke function

// with IIFE

(function() {
    console.log("Hello");
})();

// an IIFE is an Immediatley invoked function expression that is defined
// and involed all at once.

// You can create block scope with an IIFE

// pg. 440 - 441  The closure Loop problem

// pg. 450 - 451  Callbacks...

// When you pass a function to another function it is called a 
// "callback function" or "A Higher Order Function"
// 1) you can create asynchronous code
// 2) create a function that can be used in a lot of different situations

// Best Practices:
// 1) Make the Callback function optional
// 2) Check that it exists and IS a function before you invoke it.
// 3) Impliement a default behavior if the callback function is not set.

// pg. 452 - 453  Example JavaScript methods that use callback functions

// pg. 455 - 456  I read this once, but I don't understand it... so I am 
// going to read it on ce more before class.

// pg. 518 - 519 Introduction to JSON
// JSON is JavaScript Object Notation is one of several data formats to 
// transfering and storing data.

// to Serialize data you get it ready to be stored.
// to Deserialize data you convert the stored data for use.

// Data is stored as is the structure of the data.

// pg. 522 - 523 Working with JSON in JavaScript
// The global JSON Object has a stringify method and parse methods

