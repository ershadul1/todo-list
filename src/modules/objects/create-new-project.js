import Project from './project-class';
import getProjectList from './project-list';
import removeCurrentElement from '../helpers/remove-element';
import { sidebarLinks } from '../layout/sidebar';
import { saveToLocalStorage } from '../helpers/local-storage';
import activeProject from '../active-project';

const projects = () => {
  const title = document.getElementById('project-title').value;
  const description = document.getElementById('project-description').value;
  const dueDate = document.getElementById('project-dueDate').value;

  let projectList = getProjectList();
  projectList = createNewProject(title, description, dueDate, projectList); 

  const newProjectIndex = projectList.length - 1;

  saveToLocalStorage(projectList);
  removeCurrentElement('side-bar');

  const container = document.querySelector('.side-bar');

  container.appendChild(sidebarLinks());
  activeProject(newProjectIndex);
};

const createNewProject = (title, description, dueDate, projectList) => {
  const newProject = new Project(title, description, dueDate);
  
  let projectListClone = [...projectList];

  projectListClone.push(newProject);

  return projectListClone;
}

export { projects, createNewProject };