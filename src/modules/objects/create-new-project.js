import Project from './project-class';
import projectList from './project-list';
import removeCurrentElement from '../helpers/remove-element';
import { sidebarLinks } from '../layout/sidebar';

const projects = () => {
  const title = document.getElementById('project-title').value;
  const description = document.getElementById('project-description').value;
  const dueDate = document.getElementById('project-dueDate').value;

  const newProject = new Project(title, description, dueDate);
  projectList.push(newProject);
  removeCurrentElement('side-bar');

  const container = document.querySelector('.side-bar');

  container.appendChild(sidebarLinks());

  console.log(projectList);
};

export default projects;