import { loadProject } from "./loadProject";
import { test } from "./todo";

export function addForm(projectIndex){
    const taskContainer = document.querySelector('.task-container');

    const form = document.createElement('form');

    const taskTitleContainer = document.createElement('div');
    taskTitleContainer.classList.add('input-container');
    const taskTitle = document.createElement('input');
    taskTitle.type = 'text';
    taskTitle.name = 'taskName';
    taskTitle.placeholder = 'Task title';
    taskTitle.required = true;

    taskTitleContainer.appendChild(taskTitle);

    const taskDescContainer = document.createElement('div');
    const taskDesc = document.createElement('textarea');
    taskDesc.placeholder = 'Task description';
    taskDesc.cols = '25';
    taskDesc.rows = '4';

    taskDescContainer.appendChild(taskDesc);

    const taskDueDateContainer = document.createElement('div');
    const taskDueDate = document.createElement('input');
    taskDueDate.type = 'date';
    taskDueDate.name = 'duedate';
    taskDueDate.required = true;

    taskDueDateContainer.appendChild(taskDueDate);

    const priorityContainer = document.createElement('div');
    const priority = document.createElement('select');
    
    const options = ['Low', 'Medium', 'High'];
    options.forEach(function(optionText){
        const option = document.createElement('option');
        option.textContent = optionText;
        option.value = optionText.toLowerCase().replace(/\s/g, '-');
        priority.appendChild(option);
    })
    
    priorityContainer.appendChild(priority);

    const buttonDiv = document.createElement('div');
    const addBtn = document.createElement('button');
    addBtn.type = 'submit'
    addBtn.value = 'Submit';
    addBtn.textContent = 'Add'
    const cancelbtn = document.createElement('button');
    cancelbtn.value = 'cancel';
    cancelbtn.textContent = 'Cancel'

    buttonDiv.appendChild(cancelbtn);
    buttonDiv.appendChild(addBtn);

    form.appendChild(taskTitleContainer);
    form.appendChild(taskDescContainer);
    form.appendChild(taskDueDateContainer);
    form.appendChild(priorityContainer);
    form.appendChild(buttonDiv);

    taskContainer.appendChild(form);

    form.addEventListener('submit', e => {
        e.preventDefault();
        test.projects[projectIndex].newTodo(taskTitle.value, taskDesc.value, taskDueDate.value, priority.value);
        const content = document.querySelector(".content");
        if(content !== null){
            content.remove();
        }
        loadProject(test.projects[projectIndex].getProjName);
    })
}