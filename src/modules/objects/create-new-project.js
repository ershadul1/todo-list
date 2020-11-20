import Project from './project-class';
import getProjectList from './project-list';
import removeCurrentElement from '../helpers/remove-element';
import { sidebarLinks } from '../layout/sidebar';
import { saveToLocalStorage } from '../helpers/local-storage';

const projects = () => {
  const title = document.getElementById('project-title').value;
  const description = document.getElementById('project-description').value;
  const dueDate = document.getElementById('project-dueDate').value;

  const newProject = new Project(title, description, dueDate);
  const projectList = getProjectList();
  projectList.push(newProject);
  saveToLocalStorage(projectList);
  removeCurrentElement('side-bar');

  const container = document.querySelector('.side-bar');

  container.appendChild(sidebarLinks());
};

export default projects;