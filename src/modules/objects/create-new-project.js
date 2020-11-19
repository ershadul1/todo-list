import Project from './project-class'
import projectList from './project-list'
import removeCurrentElement from '../helpers/remove-element';
import { sidebarLinks } from '../layout/sidebar';

const projects = () => {
  let title = document.getElementById('project-title').value;
  let description = document.getElementById('project-description').value;
  let dueDate = document.getElementById('project-dueDate').value;

  let newProject = new Project(title, description, dueDate);
  projectList.push(newProject);
  removeCurrentElement('side-bar');

  const container = document.querySelector('.side-bar');

  container.appendChild(sidebarLinks());

  console.log(projectList);
}

export default projects;