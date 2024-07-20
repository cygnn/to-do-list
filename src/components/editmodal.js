import { loadProject } from "./loadProject";
import { storeData } from "./storeData";
import { test } from "./todo";

export function editmodal(obj, projectName){
    const body = document.querySelector('body');

    const dialog = document.createElement('dialog');
    dialog.classList.add('edit-modal');

    const h1 = document.createElement('h1');
    h1.classList.add('edit');
    h1.textContent = 'Edit task'

    dialog.appendChild(h1);

    const form = document.createElement('form');
    form.classList.add('modal-form');

    const projIndex = test.projects.findIndex(x => x.name === projectName);
    const taskIndex = test.projects[projIndex].tasks.findIndex(x => x.title === obj.title);
    console.log(test.projects[projIndex].tasks.findIndex(x => x.title === obj.title));
    console.log(test.projects.findIndex(x => x.name === projectName));
    console.log(obj);

    const projObj = obj;

    const taskNameContainer = document.createElement('div')
    taskNameContainer.classList.add('input-control');
    const taskName = document.createElement('input');
    taskName.type = 'text';
    taskName.name = 'taskName'
    taskName.value = obj.title;
    taskName.required = true;
    const error1 = document.createElement('div');
    error1.classList.add('error')

    taskNameContainer.appendChild(taskName);
    taskNameContainer.appendChild(error1);

    const taskDescContainer = document.createElement('div');
    taskDescContainer.classList.add('input-control');
    const taskDesc = document.createElement('textarea'); //MAKE THIS INTO TEXT AREA
    taskDesc.cols = '40';
    taskDesc.rows = '5';
    taskDesc.name = 'taskDescription';
    taskDesc.value = obj.desc;
    taskDesc.required = true
    const error2 = document.createElement('div');
    error2.classList.add('error');
    
    taskDescContainer.appendChild(taskDesc);
    taskDescContainer.appendChild(error2);

    const dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('input-control');
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'dueDate';
    dueDate.value = obj.dueDate;
    dueDate.required = true;
    const error3 = document.createElement('div');
    error3.classList.add('error');

    dueDateContainer.appendChild(dueDate);
    dueDateContainer.appendChild(error3);

    const priorityContainer = document.createElement('div');
    const priority = document.createElement('select');
    priority.classList.add('priority');
    
    const options = ['Low', 'Medium', 'High'];
    options.forEach(function(optionText){
        const option = document.createElement('option');
        option.textContent = optionText;
        option.value = optionText.toLowerCase().replace(/\s/g, '-');
        priority.appendChild(option);
    })
    
    priorityContainer.appendChild(priority);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-div');
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    submitBtn.textContent = 'Save';

    const cancelBtn = document.createElement('button');
    cancelBtn.value = 'Cancel';
    cancelBtn.textContent = 'Cancel'

    form.addEventListener('submit', e =>{
        e.preventDefault();

        //validateInputs();

        test.projects[projIndex].tasks[taskIndex].changeTitle(form.taskName.value);
        test.projects[projIndex].tasks[taskIndex].changeDesc(form.taskDescription.value);
        let selectedOption = priority.options[priority.selectedIndex];
        test.projects[projIndex].tasks[taskIndex].changePriority(selectedOption.value);
        test.projects[projIndex].tasks[taskIndex].changeDueDate(form.dueDate.value);
        console.log(typeof dueDate);
        console.log(test.projects[projIndex].tasks[taskIndex])

        
        dialog.close();
        dialog.remove();
        const content = document.querySelector(".content"); //MAKE A SEPERATE FILE FOR THIS
        if(content !== null){
            content.remove();
        }
        storeData(test);
        loadProject(projectName);
    })

    cancelBtn.addEventListener('click', () =>{
        event.preventDefault();
        dialog.close();
        dialog.remove();
    })

    //NO USE HERE
    const setError = (element,message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

    const validateInputs = () => {
        const tasknameValue = taskName.value.trim();
        const taskdescValue = taskDesc.value.trim();
        const duedateValue = dueDate.value.trim();

        if(tasknameValue === ''){
            setError(taskName, 'Task title is required.');
        } else{
            setSuccess(taskName);
        }
        if(taskdescValue === ''){
            setError(taskDesc, 'Task description is required.')
        } else {
            setSuccess(taskDesc);
        }
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if(regex.test(duedateValue)){
            setError(dueDate, 'Please enter a valid value.');
        } else {
            setSuccess(dueDate);
        }
    }

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