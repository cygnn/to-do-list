import { test } from "./todo";
import edit from "../imgs/edit.svg";
import dropdown from "../imgs/dropdown.svg"
import del from "../imgs/del.svg";
import { editmodal } from "./editmodal";
import addImgSrc from '../imgs/add.svg';
import { addForm } from "./addForm";

export function loadProject(projectName){
    const body = document.querySelector('body');
    const content = document.createElement('div');
    content.classList.add('content');

    const contentHeader = document.createElement('divs');
    contentHeader.classList.add('content-header');

    const headerButton = document.createElement('button');
    headerButton.classList.add('header-button');

    const myProject = document.createElement('span');
    myProject.classList.add('header-text');
    myProject.textContent = 'My Projects';

    headerButton.appendChild(myProject);
    contentHeader.appendChild(headerButton);

    const projectTitleDiv = document.createElement('div');
    projectTitleDiv.classList.add('project-title');

    const projectTitle = document.createElement('h1');
    const projObj = test.projects.filter(projName => projName.name === projectName)
    const projIndex = test.projects.findIndex(x => x.name === projectName);
    projectTitle.textContent = projectName;
    projectTitleDiv.appendChild(projectTitle);

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('task-container');

    projObj.forEach(proj => {
        proj.tasks.forEach(itemtasks => {
            console.log(itemtasks);
            const tasks = document.createElement('div');
            tasks.classList.add('tasks');
    
            const checkboxDiv = document.createElement('div');
            checkboxDiv.classList.add('checkbox-div');
    
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkboxDiv.appendChild(checkbox);
    
            const taskContent = document.createElement('div');
            taskContent.classList.add('task-content');
    
            const taskTitle = document.createElement('h3');
            taskTitle.classList.add('task-title');
            taskTitle.textContent = itemtasks.title;
    
            const dueDate = document.createElement('span');
            dueDate.classList.add('due-date');
            dueDate.textContent = itemtasks.dueDate;

            const desc = document.createElement('div');
            desc.classList.add('description');

            const btnDiv = document.createElement('div');
            btnDiv.classList.add('btn-div');

            const dropdownBtn = document.createElement('button');
            dropdownBtn.classList.add('drop');

            const drop = new Image();
            drop.src=dropdown
            dropdownBtn.appendChild(drop);

            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');

            const editImg = new Image();
            editImg.src = edit;
            editBtn.appendChild(editImg);

            const delBtn = document.createElement('button');
            delBtn.classList.add('delete-btn');

            const delImg = new Image();
            delImg.src = del;
            delBtn.appendChild(delImg);

            btnDiv.appendChild(editBtn);
            btnDiv.appendChild(delBtn);
            btnDiv.appendChild(dropdownBtn);

            editBtn.addEventListener('click', function(){
                editmodal(itemtasks, projectName)
            })

            drop.addEventListener('click', () => {
                if(desc.hasChildNodes()){
                    while(desc.hasChildNodes()){
                        desc.removeChild(desc.firstChild);
                    }
                }
                else{
                    const descText = document.createElement('p');
                    descText.classList.add('desc-text');
                    descText.textContent = itemtasks.desc;
                    desc.appendChild(descText);
    
                    taskContent.insertBefore(desc, dueDate);
                }
            })

            delBtn.addEventListener('click', () => {   
                test.projects[projIndex].delTodo(itemtasks.title)
                if(content !== null){
                    content.remove();
                }
                loadProject(projectName);
                
            })


            
    
            taskContent.appendChild(taskTitle);
            taskContent.appendChild(dueDate);
            taskContent.appendChild(btnDiv);
    
            tasks.appendChild(checkboxDiv);
            tasks.appendChild(taskContent);
            tasksContainer.appendChild(tasks);
        })
    });
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-button');

    const addImg = new Image()
    addImg.src = addImgSrc;
    addBtn.appendChild(addImg);

    const p = document.createElement('span');
    p.textContent = 'Add task';
    addBtn.appendChild(p);

    addBtn.addEventListener('click', () => {
        addForm(projIndex);
    });

    tasksContainer.appendChild(addBtn);

    content.appendChild(contentHeader);
    content.appendChild(projectTitleDiv);
    content.appendChild(tasksContainer);

    body.appendChild(content);

}