import taskForm from '../modules/forms/task-form';

test('Creates and append task form', () => {
  document.body.innerHTML = `
    <div id='container'>
      <div id='secondary-container'>
        <div id='inner-container'></div>
      </div>
    </div>
    `;

  taskForm();
  const formContainer = document.querySelectorAll('.form-container');
  expect(formContainer.length).toBe(1);
});