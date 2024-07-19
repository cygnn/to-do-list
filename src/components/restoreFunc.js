import { test } from "./todo";
export function restoreFunc(projItems){
    projItems.forEach(project => {
        test.newProject(project.name);
        console.log(project.tasks);
        const projIndex = test.projects.findIndex(x => x.name === project.name);
        console.log(projIndex);
        project.tasks.forEach(task => {
            console.log(test.projects[projIndex].newTodo(task.title,task.desc,task.dueDate,task.priority, task.isComplete))
        })
    })
    //return test;
}