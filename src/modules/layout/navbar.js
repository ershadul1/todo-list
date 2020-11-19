import projectForm from '../forms/project-form';
import removeCurrentElement from '../helpers/remove-element';

const navbar = () => {
  const container = document.querySelector('#container');

  const nav = document.createElement('nav');
  nav.classList.add('d-flex', 'justify-content-end', 'align-items-center', 'px-3');

  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add('btn', 'btn-warning');
  newProjectBtn.setAttribute('type', 'button');
  newProjectBtn.textContent = 'Create new project';
  newProjectBtn.addEventListener('click', displayForm);

  nav.appendChild(newProjectBtn);
  container.appendChild(nav);
}

const displayForm = () => {
  removeCurrentElement('inner-container');
  projectForm();
}

export default navbar;