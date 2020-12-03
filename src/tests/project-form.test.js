import projectForm from '../modules/forms/project-form';

test('Creates and append project form', () => {
    document.body.innerHTML = `
    <div id='container'>
      <div id='secondary-container'>
        <div id='inner-container'></div>
      </div>
    </div>
    `

    projectForm();
    const form = document.querySelector('form');
    expect(form).not.toBeNull();
})