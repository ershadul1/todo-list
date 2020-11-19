const navbar = () => {
  const container = document.querySelector('#container');
  const nav = document.createElement('nav');
  const newProjectBtn = document.createElement('button');
  newProjectBtn.setAttribute('type', 'button');
  newProjectBtn.textContent = 'Create new project';

  nav.appendChild(newProjectBtn);
  container.appendChild(nav);
}

export default navbar;