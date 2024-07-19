import { loadSideBar } from "./loadSideBar";
import { storeData } from "./storeData";
import { test } from "./todo";
export function addProj(removeElement){
    const body = document.querySelector('body');

    const dialog = document.createElement('dialog');

    const titleDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.classList.add('title');
    h1.textContent = 'Add Project';
    titleDiv.classList.add('title-div')
    titleDiv.appendChild(h1);

    dialog.appendChild(titleDiv);

    const form = document.createElement('form');
    const projNameDiv = document.createElement('div');
    const projName = document.createElement('input');
    projName.required = 'true';
    projName.type = 'text';
    projName.name = 'projName';
    projName.placeholder = 'Project Name';
    projNameDiv.appendChild(projName);

    const btnDiv = document.createElement('div');
    const cancelbtn = document.createElement('button');
    cancelbtn.value = 'Cancel';
    cancelbtn.textContent = 'Cancel';

    const addbtn = document.createElement('button');
    addbtn.value = 'Submit';
    addbtn.textContent = 'Add';

    btnDiv.appendChild(cancelbtn);
    btnDiv.appendChild(addbtn);

    form.appendChild(projNameDiv);
    form.appendChild(btnDiv);

    form.addEventListener('submit', e => {
        e.preventDefault();

        test.newProject(projName.value);
        storeData(test);
        loadSideBar();
        if(removeElement !== null){
            removeElement.remove();
        }
        dialog.close();
        dialog.remove();
    })

    cancelbtn.addEventListener('click', () =>{
        dialog.close();
        dialog.remove();
    })

    dialog.appendChild(form);
    body.appendChild(dialog);
    dialog.showModal();
}