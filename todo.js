//DOM Selection
let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

//Event Handling
button.addEventListener("click", function () {
  // Prevent empty task
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  // Dynamic Element Creation
  let li = document.createElement("li");
  li.innerText = input.value;

  // Styling using style.property
  li.style.backgroundColor = "#d4edda";
  li.style.border = "1px solid green";
  li.style.borderRadius = "7px";

  // Add class using setAttribute
  li.setAttribute("class", "task-item");

  // Append
  list.append(li);

  // Remove task when clicked
  li.addEventListener("click", function () {
    li.remove();
  });

  // 5.Clear input field
  input.value = "";
});