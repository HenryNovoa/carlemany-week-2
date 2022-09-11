function addElement() {
  const myList = document.getElementById("my-list");

  const numberOfElements = myList.childElementCount;

  const newElement = document.createElement("li");

  newElement.innerText = `Element ${numberOfElements + 1}`;

  newElement.className = "list-group-item";

  myList.appendChild(newElement);
}
