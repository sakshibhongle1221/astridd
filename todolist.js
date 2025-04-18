const todoList = [
{name:'padhae',
dueDate:'2025-05-30'},
{name : 'college',
dueDate:'2025-07-30'},
{name:'boyfriend se baat',
dueDate:'2025-05-22'}
];

renderTodoList();

function renderTodoList(){
let todoListHTML = '';

for(let i =0;i<todoList.length;i++){
  const todoObject = todoList[i];
  // SHORTCUT FOR THE BELOW LINE 

  //const name= todoObject.name;
 
  //const dueDate = todoObject.dueDate;

  const {name , dueDate} = todoObject;

  const html = 
  `<div> ${name} </div> 
  <div> ${dueDate} </div>
  <button onclick = "todoList.splice(${i},1);
  renderTodoList();
  " class = "delete-todo-button">DELETE
  </button> 
   `;
  todoListHTML +=html;
}

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;
//control html inside this  element 
// so hame todoListHTML vali ko print krna hai so isliye we use .innerHTML
}

function AddTodo(){
  const inputElement = document.querySelector('.js-name-input');
  //this is taking this element called input placeholder into javascript. 
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate = dateInputElement.value;

  todoList.push({ //name :name,
    name, //  SHORTCUTTT ye above line ke jaghe bhi likh skte hai (ONLY HAPPENDS JAB DONO SAME HAI) 
    dueDate : dueDate
  } );
  
  inputElement.value = '';

  renderTodoList();

}