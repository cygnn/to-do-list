import addSvg from '../imgs/plus-square-svgrepo-com.svg';
import { test } from './todo';
import img1 from '../imgs/add.svg'
import { loadProject } from './loadProject';
export function loadSideBar(){
    const body = document.querySelector('body');

    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');

    const profile = document.createElement('div');
    profile.classList.add('profile');

    const profileImg = document.createElement('div');
    profileImg.classList.add('profile-image');

    const img = document.createElement('img');
    
    profileImg.appendChild(img);

    const profileName = document.createElement('p');
    profileName.textContent = 'Tododo';
    profileName.classList.add('profile-name');

    profile.appendChild(profileImg);
    profile.appendChild(profileName);

    const projectList = document.createElement('div');
    projectList.classList.add('project-list');

    const projectListHeader = document.createElement('div');
    projectListHeader.classList.add('project-list-header');

    const projectListTitle = document.createElement('h3');
    projectListTitle.textContent = 'My Projects';
    projectListTitle.classList.add('project-list-title');

    const projectAdd = new Image();
    projectAdd.src = addSvg;

    projectListHeader.appendChild(projectListTitle);
    projectListHeader.appendChild(projectAdd);

    const projects = document.createElement('div');
    projects.classList.add('projects');
    let projItems = test.getProjects;

    projItems.forEach(project => {
        const projectbtn = document.createElement('button');
        projectbtn.classList.add('project-button');

        const projectName = document.createElement('p');
        projectName.classList.add('project-name');
        projectName.textContent = project.getProjName;

        projectbtn.addEventListener('click', function(){
            const content = document.querySelector('.content')
            if(content !== null){
                content.remove();
            }
            loadProject(projectName.textContent);
        });

        projectbtn.appendChild(projectName);
        projects.appendChild(projectbtn);
    });

    projectList.appendChild(projectListHeader);
    projectList.appendChild(projects);

    const addTask = document.createElement('button');
    addTask.classList.add('add-task');
    
    const addImg = new Image();
    addImg.src = img1;

    const addText = document.createElement('span')
    addText.textContent = 'Add Task';

    addTask.appendChild(addImg);
    addTask.appendChild(addText);


    sideBar.appendChild(profile)
    sideBar.appendChild(projectList);
    sideBar.appendChild(addTask);

    body.appendChild(sideBar);
}