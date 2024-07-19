
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

    content.appendChild(h1);
    body.appendChild(content);
}