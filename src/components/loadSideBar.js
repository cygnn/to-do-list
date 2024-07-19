import addSvg from '../imgs/plus-square-svgrepo-com.svg';
import { test } from './todo';
import { loadProject } from './loadProject';
import { addProj } from './addProj';
import delBtn from '../imgs/del.svg';
import { deleteProject } from './deleteProject';
import { storeData } from './storeData';
import { retrieveData } from './retrieveData';
import { restoreFunc } from './restoreFunc';
import { loadHome } from './loadHome';

export function loadSideBar(){
    const content = document.querySelector('.content')
        if(content !== null){
            content.remove();
        }
    const body = document.querySelector('body');

    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');

    const profile = document.createElement('div');
    profile.classList.add('profile');

    const profileName = document.createElement('p');
    profileName.textContent = 'Tododo';
    profileName.classList.add('profile-name');

    profileName.addEventListener('click', loadHome);

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

    projectAdd.addEventListener('click', () => {
        addProj(sideBar);
    });

    const projects = document.createElement('div');
    projects.classList.add('projects');
    let obj_deser = retrieveData();
    console.log(obj_deser);
    restoreFunc(obj_deser.projects);
    console.log(test);
    let projItems = test.getProjects;

    console.log(projItems);

    projItems.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');

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

        const delProjBtn = document.createElement('button');
        delProjBtn.classList.add('delete-btn');

        const delImg = new Image();
        delImg.src = delBtn;

        delProjBtn.appendChild(delImg);

        delProjBtn.addEventListener('click', () =>{
            deleteProject(projectName.textContent, sideBar)
        })

        projectbtn.appendChild(projectName);
        projectItem.appendChild(projectbtn);
        projectItem.appendChild(delProjBtn);
        projects.appendChild(projectItem)
    });

    projectList.appendChild(projectListHeader);
    projectList.appendChild(projects);

    sideBar.appendChild(profile)
    sideBar.appendChild(projectList);

    body.appendChild(sideBar);
}