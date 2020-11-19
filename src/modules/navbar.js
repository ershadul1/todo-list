import projectForm from './project-form';
import removeCurrentElement from '../helpers/inner-container';

const navbar = () => {
  const container = document.querySelector('#container');

  const nav = document.createElement('nav');
  nav.classList.add('d-flex', 'justify-content-center', 'align-items-center');

  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add('btn', 'btn-light');
  newProjectBtn.setAttribute('type', 'button');
  newProjectBtn.textContent = 'Create new project';
  newProjectBtn.addEventListener('click', displayForm);

  nav.appendChild(newProjectBtn);
  container.appendChild(nav);
}

const displayForm = () => {
  removeCurrentElement();
  const container = document.getElementById('inner-container');

  container.appendChild(projectForm());
}



export default navbar;