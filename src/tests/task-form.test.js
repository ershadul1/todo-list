import taskForm from '../modules/forms/project-form';

test('Creates and append project form', () => {
  document.body.innerHTML = `
    <div id='container'>
      <div id='secondary-container'>
        <div id='inner-container'></div>
      </div>
    </div>
    `;

  taskForm();
  const formContainer = document.querySelectorAll('.form-container');
  expect(formContainer).not.toBeNull();
});