1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**ans:**
a. getElementById :The id attribute in HTML should be unique within a document. When we need the specific element from DOM that time we use getElementById() method. If no element with the specified id exists, it returns null.
   example: const thing = document.getElementById("elementID");

b.getElementsByClassName: By using getElementByClassName(), we get a collection of elements with the specified class name. The getElementsByClassName() method returns an HTMLCollection.
example: const things = document.getElementByClassName('elementsClassName');

c. querySelector: Whatever I'm searching for, if it exists in the DOM, querySelector() will return that element first. Otherwise, it will return null.
example: const container = document.querySelector("#test h1"); //if there's multiple h1 tag in '#test' id,but by using querySelector it gives first one.

d. querySelectorAll : By using querySelectorAll() we get a NodeList, which is a collection of all elements that match the provided selectors.
example: const nodeList = document.querySelectorAll("h3, span");

2. How do you **create and insert a new element into the DOM**?

**ans:** Here are the following steps which i maintain for create & insert new element into the DOM :
   example:
   i.Create the HTML element : const elementP = document.createElement("p");
   ii.Set the innerText/innerHTML: elementP.innerText = "Amar Sonar Bangla ami tomay vlobashi!";
   iii. Track the parent element: const parent = document.getElementById('bangladesh');
   iv. Append the child: parent.appendChild(elementP);

4. What is **Event Bubbling** and how does it work?

**ans:** Event bubbling directs an event to its target. Event bubbling is a mechanism of the DOM where, when an event is triggered on an element, that event bubbles up through the DOM tree (from a child to a parent element). That is, if a child element is clicked, that event will also be triggered on its parent element.

5. What is **Event Delegation** in JavaScript? Why is it useful?

**ans:** In JS, Event Delegation is a pattern based upon the concept of Event Bubbling.It is very useful. Because, instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

6. What is the difference between **preventDefault() and stopPropagation()** methods?

**ans:** Here are the following difference between preventDefault() & stopPropagation() :
   i. preventDefault(): We can use event.preventDefault() when we want to prevent the default behavior of an element. For example, this can be used to prevent a form from being submitted.

ii. stopPropagation(): event.stopPropagation() stops the event from propagating (bubbling) up to parent elements..
