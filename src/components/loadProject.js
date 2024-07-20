import { test } from "./todo";
import edit from "../imgs/edit.svg";
import dropdown from "../imgs/dropdown.svg"
import del from "../imgs/del.svg";
import { editmodal } from "./editmodal";
import addImgSrc from '../imgs/add.svg';
import { addForm } from "./addForm";
import { storeData } from "./storeData";
import { formatDistanceStrict } from "date-fns";
import { loadHome } from "./loadHome";

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

    headerButton.addEventListener('click', loadHome)

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
            tasks.classList.add(itemtasks.priority);
    
            const checkboxDiv = document.createElement('div');
            checkboxDiv.classList.add('checkbox-div');
    
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkboxDiv.appendChild(checkbox);

            checkbox.addEventListener('change', function() {
                itemtasks.changeIsComplete();
                if (itemtasks.isComplete === true) {
                    taskContent.classList.add('checked')
                  console.log("Checkbox is checked..");
                    taskContent.classList.remove('unchecked')
                } else {
                    taskContent.classList.add('unchecked')
                  console.log("Checkbox is not checked..");
                    taskContent.classList.remove('checked');
                }
              });
    
            const taskContent = document.createElement('div');
            taskContent.classList.add('task-content');
    
            const taskTitle = document.createElement('h3');
            taskTitle.classList.add('task-title');
            taskTitle.textContent = itemtasks.title;
    
            const dueDate = document.createElement('span');
            dueDate.classList.add('due-date');
            const result = formatDistanceStrict(new Date(), itemtasks.dueDate, {
                unit: 'day'
            });
            let due;
            if (result === '0 days'){
                due = `Due in : Today`
            }
            else{
                due = `Due in : ${result}`;
            }
            dueDate.textContent = due;
            console.log(result);

            const desc = document.createElement('div');
            desc.classList.add('description');
            const descText = document.createElement('p');
            descText.classList.add('desc-text');
            descText.textContent = itemtasks.desc;
            desc.appendChild(descText);

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
                if(desc.classList.contains('drop-open')){
                    desc.classList.remove("drop-open");
                }
                else {
                    desc.classList.add('drop-open');
                }
            })

            delBtn.addEventListener('click', () => {   
                test.projects[projIndex].delTodo(itemtasks.title)
                storeData(test);
                if(content !== null){
                    content.remove();
                }
                loadProject(projectName);
                
            })

            taskContent.appendChild(taskTitle);
            taskContent.appendChild(desc)
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