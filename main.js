




//let undonTasks = document.querySelector('.tasks.undone');
//let input = document.querySelector('.taskinput');
//let button = document.querySelector('.add');


//button.onclick = addElement();
//function addElement() {
//   let newtask = document.createElement("div");
 //  undonTasks.appendChild(newtask);
//};
// Selecting the input field and button
const input = document.querySelector(".taskinput");
const addButton = document.querySelector(".add");

// Selecting the list where tasks will be displayed
const taskList = document.querySelector(".tasks");


//  window.localStorage.setItem("title" , taskText);
// Function to add a new task
function addTask() {
  // Get the value of the input field
  const taskText = input.value;

  // If input field is not empty
  if (taskText.trim() !== "") {
    // Create a new list item
    const listItem = document.createElement("div");
    // Create a text node with the task text
    const taskTextNode = document.createTextNode(taskText);

    // Append the text node to the list item
    listItem.appendChild(taskTextNode);
    
    ///done button
    const buttons = document.createElement("div");
    const donebutton = document.createElement("span");
    donebutton.textContent = "done";
   donebutton.className = "done";
    const donelist = document.querySelector('.donelist');
    
    donebutton.addEventListener("click", function() {
      donelist.appendChild(listItem);
      donebutton.remove();
    });
    
    // Create a delete button
    
    const deleteButton = document.createElement("span");
    deleteButton.textContent = "Delete";


    // Function to delete task
    deleteButton.addEventListener("click", function() {
      listItem.remove();
    });
   
    // Append the delete button to the list item
    buttons.appendChild(deleteButton);
    buttons.appendChild(donebutton);
    listItem.appendChild(buttons);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    input.value = "";
    
  } else {
    // If input field is empty, show an alert
    alert("Please enter a task!");
  }
}

// Event listener for the add button
addButton.addEventListener("click", addTask);