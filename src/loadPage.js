export function loadPage(){
    class Todo{
        constructor(title, desc, dueDate, priority, isComplete){
            this.title = title;
            this.desc = desc;
            this.dueDate = dueDate;
            this.priority = priority;
            this.isComplete = false;
        }
    
        changeIsComplete(){
            this.isComplete = !this.isComplete;
        }
    
        changePriority(newPriority){
            this.priority = newPriority;
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
    
        get getProjects(){
            return this.projects;
        }
    }
    
    const test = new ProjectLib();
    
    test.newProject('test project');
    test.newProject('empty project');
    
    test.projects[0].newTodo('Test title', 'this is a test', '07-12-24', 'high');
    test.projects[0].newTodo('Test 2', 'Test 2 description', '07-13-24', 'high');
    test.projects[0].tasks[0].changePriority('low');
    
    console.log(test.projects[0].getTasks);
    console.log(test.getProjects);
    

    const body = document.querySelector('body');

    const content = document.createElement('div');
    content.classList.add('content');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Todo or Not Todo'
    content.appendChild(title);

    test.projects.forEach(project => {
        const projDiv = document.createElement('div');
        projDiv.classList.add('project-div');

        const projName = document.createElement('h3');
        projName.classList.add('project-name');
        projName.textContent = project.getProjName;

        projDiv.appendChild(projName);

        project.tasks.forEach(task => {
            const taskContent = document.createElement('div');
            taskContent.classList.add('task-content');

            const taskName = document.createElement('p');
            taskName.classList.add('task-name');
            taskName.textContent = `Task Name: ${task.title}`;

            const taskDesc = document.createElement('p');
            taskDesc.classList.add('task-description');
            taskDesc.textContent = `Task Description: ${task.desc}`;

            const taskDue = document.createElement('p');
            taskDue.classList.add('task-due');
            taskDue.textContent = `Task Due Date: ${task.dueDate}`;

            const taskPriority = document.createElement('p');
            taskPriority.classList.add('task-priority');
            taskPriority.textContent = `Task Priority: ${task.priority}`;

            taskContent.appendChild(taskName);
            taskContent.appendChild(taskDesc);
            taskContent.appendChild(taskDue);
            taskContent.appendChild(taskPriority);
            projDiv.appendChild(taskContent);
        })

        
        

        content.appendChild(projDiv);
    });

    body.appendChild(content);
    
}