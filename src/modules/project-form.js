import projects from './create-new-project'

const formBuild = () => {
  const form = document.createElement('form');
  form.setAttribute('id', 'project-form');
  form.classList.add('form');

  const labelFor = ['title', 'description', 'dueDate'];
  const inputType = ['text', 'text', 'date'];

  for (let i = 0; i < labelFor.length; i += 1) {
    const label = document.createElement('label');
    label.setAttribute('for', labelFor[i]);
    label.textContent += `Project ${labelFor[i]}`;
    label.classList.add('label');

    const input = document.createElement('input');
    input.setAttribute('type', inputType[i]);
    input.setAttribute('id', `project-${labelFor[i]}`);

    const br = document.createElement('br');

    form.append(label, input, br);
  }
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'create-project');
  button.textContent = 'Create';
  button.addEventListener('click', projects);

  form.append(button);
  return form;
};

const form = () => {
  const container = document.getElementById('container');

  container.appendChild(formBuild());
};

export default form;
