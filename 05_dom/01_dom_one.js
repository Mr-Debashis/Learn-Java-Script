
/*

The HTML DOM (HTML Document Object Model) is an Object Model for HTML Documents.
When a web page loads, the browser creates a tree-like representation of the HTML document.

The HTML DOM can be used to access HTML elements.




++++++++++++++++++++++++++++++++++++++++ Selecting DOM Elements ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The most common way to access an HTML element is to use the id of the element:

document.getElementById(id)               ------            Find an element by element id
document.getElementsByTagName(name)       ------            Find elements by tag name
document.getElementsByClassName(name)     ------            Find elements by class name
document.querySelector(selector)          ------            Find the first element that matches a CSS selector
document.querySelectorAll(selector)	      ------            Find all elements that match a CSS selector

*/

//Select element by using ID
const element1 = document.getElementById("intro");

//Select element by using TagName
const element2 = document.getElementsByTagName("p");

//Select element by using ClassName
const element3 = document.getElementsByClassName("intro");

//Select element by using querySelector & querySelectorAll
const element4 = document.querySelector("p.intro");
const element5 = document.querySelectorAll("p.intro");




//++++++++++++++++++++++++++++++++++++++++ Changing HTML Elements ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
The HTML DOM allows JavaScript to change both the text and the content of HTML elements.
The easiest way to modify the content is by using the **innerHTML property:

*****And some other property is that used most - innerContent & innerText

The innerHTML property is useful for getting or replacing the content of HTML elements.
****The innerHTML property can be used to get or change any HTML element, including <html> and <body>.****
*/

document.getElementById(id).innerHTML = new HTML






//++++++++++++++++++++++++++++++++++++ Changing an Attribute of HTML Elements ++++++++++++++++++++++++++++++++++++++++++++++++
/*
To change the value of an HTML **attribute, use this syntax:
*/

document.getElementById(id).attribute = new value





//++++++++++++++++++++++++++++++++++++ Changing Style of HTML Elements ++++++++++++++++++++++++++++++++++++++++++++++++
/*
The HTML DOM allows JavaScript to change the style of HTML elements.
To change the style of an HTML element, use this syntax:
*/

document.getElementById(id).style.property= new style
