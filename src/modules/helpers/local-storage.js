import Project from '../objects/project-class';

const saveToLocalStorage = (projectList) => {
  localStorage.setItem('projectList', JSON.stringify(projectList));
};

const loadFromLocalStorage = () => {
  const projects = JSON.parse(localStorage.getItem('projectList'));
  const projectList = [];
  projects.forEach(element => {
    const newProject = new Project(element.title, element.description, element.dueDate);
    const { taskList } = element;
    taskList.forEach(task => {
      newProject.addTask(task);
    });
    projectList.push(newProject);
  });
  return projectList;
};

const initializeLocalStorage = () => {
  if (localStorage.getItem('projectList')) {
    loadFromLocalStorage();
  } else {
    const defaultProject = new Project('Project-1', 'Default project', 'Not specified');
    const projects = [defaultProject];
    localStorage.setItem('projectList', JSON.stringify(projects));
  }
};

export { saveToLocalStorage, loadFromLocalStorage, initializeLocalStorage };