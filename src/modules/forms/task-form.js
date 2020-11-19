import createTask from "../objects/create-new-task";

const form = (index) => {
  const form = document.createElement('form');
  form.setAttribute('id', 'task-form');
  form.classList.add('form');

  const labelFor = ['title', 'description', 'dueDate', 'priority', 'notes'];
  const inputType = ['text', 'text', 'date', 'text'];

  for (let i = 0; i < labelFor.length; i += 1) {
    if (i === 3) {
      const radioLabel = ['high', 'medium', 'low'];

      const text = document.createElement('p');
      text.textContent += 'Priority';

      form.append(text);
      for (let j = 0; j < radioLabel.length; j += 1) {
        const label = document.createElement('label');
        label.setAttribute('for', radioLabel[j]);
        label.textContent += radioLabel[j];

        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('id', `${radioLabel[j]}-radio`);
        input.setAttribute('name', 'priority');
        input.setAttribute('value', radioLabel[j]);

        const br = document.createElement('br');

        form.append(input, label, br);
      }
    } else {
      const label = document.createElement('label');
      label.setAttribute('for', labelFor[i]);
      label.textContent += `Task ${labelFor[i]}`;
      label.classList.add('label');

      const input = document.createElement('input');
      input.setAttribute('type', inputType[i]);
      input.setAttribute('id', `task-${labelFor[i]}`);

      const br = document.createElement('br');

      form.append(label, input, br);
    }
  }
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('id', 'create-task');
  button.textContent = 'Create';
  button.onclick = () => {
    createTask(index);
  }

  form.append(button);

  const container = document.getElementById('inner-container');

  container.appendChild(form);
};


export default form;