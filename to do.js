let task = document.getElementById('input');
let taskList = document.getElementById('task-list');
const addBtn = document.getElementById('btn');
const editBtn = document.getElementById('edit');
let errMsg = document.getElementById('err-msg');

addBtn.addEventListener('click', addTask);

function addTask(){
let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
let newTask = task.value;
    taskList.append(paragraph)
let btns = document.createElement('div');


let deleteBtn = document.createElement('img')
      deleteBtn.src = 'delete.png';
      deleteBtn.style ='height: 20px; width: 20px; margin-right: 5px;'
    
let checked = document.createElement('img')
        checked.src = 'checked.png'
        checked.style ='height: 20px; width: 20px; margin-right: 5px;';

let editBtn = document.createElement('img')
        editBtn.src = 'edit.png';
        editBtn.style ='height: 20px; width: 20px; margin-right: 5px; '        

        btns.append(editBtn, checked, deleteBtn);
        paragraph.append(newTask, btns);



        editBtn.addEventListener('click', editItem)
   function editItem(){
 task.value = paragraph.innerText;
 taskList.removeChild(paragraph);
//  paragraph.innerText = task.value;  


   }

   checked.addEventListener('click', completed)
      function completed(){
         paragraph.style.textDecoration = 'line-through';
         paragraph.style.backgroundColor = 'orange';
       }

       deleteBtn.addEventListener('click', deleteTask)
       function deleteTask(){
          taskList.removeChild(paragraph);
        }


        
   if ( task.value === ''){
     errMsg.innerText = 'please add a new task';
     errMsg.style = 'height: 40px';
     taskList.removeChild (paragraph);
//      setTimeout( function (){
//              const err = document.getElementById('err-msg');
//              err.parentNode.removeChild(err);
//              }, 2000);  
   } 
   else {
    task.value = '';
   }

   


}
