### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: First `getElementById` it's select the dom element by the `id` name, And `getEelementsByClassName` it's select the dom element using by the class, And querySelector / querySelectorAll is use to select single or multiple dom element together.

### 2. How do you create and insert a new element into the DOM?

Ans: To create and insert a new element in the DOM, we use: `document.createElement()`, `appendChild()`.

### 3. What is Event Bubbling? And how does it work?

Ans: Event Bubbling means when you click on a child element, the event first runs on the child, then it moves upward to its parent, then to grandparent, and so on.

It bubbles up through the DOM.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation means Instead of adding event listeners to every child element, we add one event listener to the parent element and control the children from there.

### 5. What is the difference between preventDefault() and stopPropagation()?

Ans: `preventDefault()` It stops the browser’s default behavior, And `stopPropagation()` It stops event bubbling.
