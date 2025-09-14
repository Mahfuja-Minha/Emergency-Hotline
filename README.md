## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

| Method                  | Description                                                                 | Returns                  |
|-------------------------|-----------------------------------------------------------------------------|--------------------------|
| `getElementById`        | Selects an element by its **unique id**                                     | A single element         |
| `getElementsByClassName`| Selects elements by their **class name**                                    | HTMLCollection (live)    |
| `querySelector`         | Selects the **first element** that matches a CSS selector                  | A single element         |
| `querySelectorAll`      | Selects **all elements** that match a CSS selector                         | NodeList (static)        |

---

## 2. How do you create and insert a new element into the DOM?

1. Use **`document.createElement()`** → to create a new element.  
2. Add text, attributes, or classes to that element.  
3. Use **`appendChild()`** (or `append() / prepend()`) → to insert it into a parent element in the DOM.  


---

## 3. What is Event Bubbling and how does it work?

- **Event Bubbling** means when an event happens on an element, it first runs on that element, then moves **upward through its ancestors** (parent → grandparent → root).  
- Example: Clicking a `<button>` inside a `<div>` will trigger the button’s event first, then the `<div>`’s event, and so on.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

- **Event Delegation** is a technique where instead of adding event listeners to multiple child elements, you add a **single listener to their parent** and detect the target using `event.target`.  
- **Why useful?**  
  - Improves performance (fewer event listeners).  
  - Handles dynamically added elements.  

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

| Method               | Purpose                                                                 |
|----------------------|-------------------------------------------------------------------------|
| `preventDefault()`   | Stops the browser’s **default action** (e.g., preventing form submit or link navigation). |
| `stopPropagation()`  | Stops the event from **bubbling up** to parent elements.                |

---










































