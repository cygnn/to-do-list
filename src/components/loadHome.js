import { test } from "./todo";
import { loadProject } from "./loadProject";
export function loadHome(){
    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.classList.add('content');

    const remove = document.querySelector('.content');
    if(remove !== null){
        remove.remove();
    }

    const h1 = document.createElement('h1');
    h1.classList.add('welcome');
    h1.textContent = 'Welcome to Tododo';

    const myprojContainer = document.createElement('div');
    myprojContainer.classList.add('home');

    const contentHeader = document.createElement('div');
    contentHeader.classList.add('content-header');

    const text = document.createElement('h1')
    text.textContent = 'My Projects';
    contentHeader.appendChild(text);

    const contentBody = document.createElement('div');
    contentBody.classList.add('content-body');

    const projItem = test.getProjects;

    projItem.forEach(project => {
        const contentItem = document.createElement('div');
        contentItem.classList.add('content-item');
    
        const projName = document.createElement('h3')
        projName.classList.add('name');
        projName.textContent = project.getProjName;
        contentItem.appendChild(projName);
        contentBody.appendChild(contentItem);

        contentItem.addEventListener('click', function(){
            const content = document.querySelector('.content')
            if(content !== null){
                content.remove();
            }
            loadProject(projName.textContent);
        });
    });

    

    myprojContainer.appendChild(contentHeader);
    myprojContainer.appendChild(contentBody);
    content.appendChild(h1);
    content.appendChild(myprojContainer)
    body.appendChild(content);
}