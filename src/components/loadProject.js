import { test } from "./todo";
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
    projectTitle.textContent = projectName;
    projectTitleDiv.appendChild(projectTitle);

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('task-container');

    projObj.forEach(task => {
        task.tasks.forEach(itemtasks => {
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
            console.log(task.title);
            taskTitle.textContent = itemtasks.title;
    
            const dueDate = document.createElement('span');
            dueDate.classList.add('due-date');
            dueDate.textContent = itemtasks.dueDate;

            const desc = document.createElement('div');
            desc.classList.add('description');


            taskContent.addEventListener('click', () => {
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
    
            taskContent.appendChild(taskTitle);
            taskContent.appendChild(dueDate);
    
            tasks.appendChild(checkboxDiv);
            tasks.appendChild(taskContent);
            tasksContainer.appendChild(tasks);
        })
    });

    content.appendChild(contentHeader);
    content.appendChild(projectTitleDiv);
    content.appendChild(tasksContainer);

    body.appendChild(content);

}