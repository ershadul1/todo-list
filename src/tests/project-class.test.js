import Project from '../modules/objects/project-class';

test('Creates a new project', () => {
    const newProject = new Project('Test project', 'This is a project for testing', '12/03/20');
    expect(newProject).toBeDefined();
})

test('Adds a new task to project', () => {
    const newProject = new Project('Test project', 'This is a project for testing', '12/03/20');
    const newTask = {
        title: 'Demo task',
        description: 'This is a demo task',
        dueDate: '03/12/20',
        priority: 'high',
        notes: 'Demo task',
        completed: true
    }
    newProject.addTask(newTask);
    expect(newProject.taskList).toContain(newTask)
})

test('Removes new task from project', () => {
    const newProject = new Project('Test project', 'This is a project for testing', '12/03/20');
    const newTask = {
        title: 'Demo task',
        description: 'This is a demo task',
        dueDate: '03/12/20',
        priority: 'high',
        notes: 'Demo task',
        completed: true
    }
    newProject.addTask(newTask);
    newProject.removeTask(newTask);
    expect(newProject.taskList).not.toContain(newTask)
})

test('Gets project list', () => {
    const newProject = new Project('Test project', 'This is a project for testing', '12/03/20');
    const newTask = {
        title: 'Demo task',
        description: 'This is a demo task',
        dueDate: '03/12/20',
        priority: 'high',
        notes: 'Demo task',
        completed: true
    }
    newProject.addTask(newTask);
    expect(newProject.readTaskList).toStrictEqual([newTask])
})

