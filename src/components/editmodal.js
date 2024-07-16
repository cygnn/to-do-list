import { loadProject } from "./loadProject";
import { test } from "./todo";

export function editmodal(obj, projectName){
    const body = document.querySelector('body');

    const dialog = document.createElement('dialog');
    const form = document.createElement('form');

    const projIndex = test.projects.findIndex(x => x.name === projectName);
    const taskIndex = test.projects[projIndex].tasks.findIndex(x => x.title === obj.title);
    console.log(test.projects[projIndex].tasks.findIndex(x => x.title === obj.title));
    console.log(test.projects.findIndex(x => x.name === projectName));
    console.log(obj);

    const projObj = obj;

    const taskNameContainer = document.createElement('div')
    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.name = 'taskName'
    taskName.value = obj.title;

    taskNameContainer.appendChild(taskName);

    const taskDescContainer = document.createElement('div');
    const taskDesc = document.createElement('input'); //MAKE THIS INTO TEXT AREA
    taskDesc.type = 'text';
    taskDesc.name = 'taskDescription';
    taskDesc.value = obj.desc;
    taskDescContainer.appendChild(taskDesc);

    const dueDateContainer = document.createElement('div');
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'dueDate';
    //Make placeholder for date
    dueDateContainer.appendChild(dueDate);

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

    const buttonContainer = document.createElement('div');
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    submitBtn.textContent = 'Save';

    const cancelBtn = document.createElement('button');
    cancelBtn.value = 'Cancel';
    cancelBtn.textContent = 'Cancel'

    submitBtn.addEventListener('click', () =>{
        event.preventDefault();
        dialog.close();
        test.projects[projIndex].tasks[taskIndex].changeTitle(form.taskName.value);
        test.projects[projIndex].tasks[taskIndex].changeDesc(form.taskDescription.value);
        let selectedOption = priority.options[priority.selectedIndex];
        test.projects[projIndex].tasks[taskIndex].changePriority(selectedOption.value);
        console.log(test.projects[projIndex].tasks[taskIndex])

        const content = document.querySelector(".content");
        if(content !== null){
            content.remove();
        }
        
        loadProject(projectName);
    })

    cancelBtn.addEventListener('click', () =>{
        event.preventDefault();
        dialog.close();
    })

    buttonContainer.appendChild(submitBtn);
    buttonContainer.appendChild(cancelBtn);

    form.appendChild(taskNameContainer);
    form.appendChild(taskDescContainer);
    form.appendChild(dueDateContainer);
    form.appendChild(priorityContainer);
    form.appendChild(buttonContainer);
    dialog.appendChild(form);

    
    body.appendChild(dialog)
    dialog.showModal();
}