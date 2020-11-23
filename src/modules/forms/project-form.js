import projects from '../objects/create-new-project';

const form = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container', 'w-25');

  const form = document.createElement('form');
  form.setAttribute('id', 'project-form');
  form.classList.add('form');

  const labelFor = ['title', 'description', 'dueDate'];
  const inputType = ['text', 'text', 'date'];

  for (let i = 0; i < labelFor.length; i += 1) {
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');

    const label = document.createElement('label');
    label.setAttribute('for', labelFor[i]);
    label.textContent += `Project ${labelFor[i]}`;
    label.classList.add('label');

    const input = document.createElement('input');
    input.setAttribute('type', inputType[i]);
    input.setAttribute('id', `project-${labelFor[i]}`);
    input.classList.add('form-control');

    const br = document.createElement('br');

    formGroup.append(label, input, br);
    form.appendChild(formGroup);
  }
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'create-project');
  button.textContent = 'Create';
  button.addEventListener('click', projects);
  button.classList.add('btn', 'btn-primary');

  form.append(button);
  const container = document.getElementById('inner-container');

  container.appendChild(form);
};


export default form;
