import { loadPage } from "./loadPage";

class Todo{
    constructor(title, desc, dueDate, priority, isComplete){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
    }

    changeTitle(newTitle){
        this.title = newTitle;
    }

    changeDesc(newDesc){
        this.desc = newDesc;
    }

    changeIsComplete(){
        this.isComplete = !this.isComplete;
    }

    changePriority(newPriority){
        this.priority = newPriority;
    }

    changeDueDate(newDuedate){
        this.dueDate = newDuedate;
    }

    
}

class Projects{
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    newTodo(title,desc,dueDate,priority, isComplete){
        let t = new Todo(title, desc, dueDate, priority, isComplete)
        this.tasks.push(t);
        return t
    }

    delTodo(title){
        const index = this.tasks.findIndex(x => x.title === title);
        this.tasks.splice(index, 1);
    }

    // editTodo(title,newTitle, newDesc, newDueDate, newPriority){
    //     let index = this.tasks.indexOf(title);
    //     if(index > 0 && index < this.tasks.length){
    //         tasks[index].title = newTitle;
    //         tasks[index].desc = newDesc;
    //         tasks[index].dueDate = newDueDate;
    //         tasks[index].priority = newPriority;
    //     }
    // }

    get getTasks(){
        return this.tasks;
    }

    get getProjName(){
        return this.name;
    }
}

class ProjectLib{
    constructor(){
        this.projects = []
    }

    newProject(name){
        let p = new Projects(name);
        this.projects.push(p);
        return p;
    }

    deleteProject(name){
        const index = this.projects.findIndex(x => x.name === name);
        this.projects.splice(index, 1);
    }

    get getProjects(){
        return this.projects;
    }
}

export const test = new ProjectLib();

// test.newProject('test project');
// test.newProject('empty project');

// test.projects[0].newTodo('Test title', 'this is a test', '07-12-24', 'high');
// test.projects[0].newTodo('Test 2', 'Test 2 description', '07-13-24', 'high');
// test.projects[0].tasks[0].changePriority('low');

// console.log(test.projects[0].getTasks);
// console.log(test.getProjects);


// test.projects[0].changePriority('low');

// console.log(test.tasks);
// console.log(test.tasks[0].changeIsComplete());
// console.log(test.getProjName);
// export {
//     changeIsComplete,
//     changePriority,
//     newTodo,
//     getTasks,
//     getProjName,
//     newProject,
//     getProjects,
// }