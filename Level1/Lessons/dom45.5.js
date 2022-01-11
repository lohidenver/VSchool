

// innerHTML vs text content

var myList = document.getElementById("my-list");
console.log(myList.textContent);
console.log(myList.innerHTML);
myList.innerHTML += "<li>3</li>";
console.log(myList.textContent);
console.log(myList.innerHTML);

document.body.innerHTML += "<p>Rhonda prided herself on always taking the path less traveled. She'd decided to do this at an early age and had continued to do so throughout her entire life. It was a point of pride and she would explain to anyone who would listen that doing so was something that she'd made great efforts to always do. She\'d never questioned this decision until her five-year-old niece asked her, 'So, is this why your life has been so difficult?' and Rhonda didn\'t have an answer for her.</p>";

/*append() vs appendChild()

.append()
This method is used to add an element in form of a Node object or a DOMString (basically means text).

Similar to the .append method, this method is used to elements in the DOM, but in this case, only accepts a Node object

.append does not have a return value while .appendChild returns the appended Node object

.append allows you to add multiple items while appendChild allows only a single item

In cases where you can use .appendChild, you can use .append but not vice versa.

*/