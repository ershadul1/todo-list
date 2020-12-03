import removeElement from '../modules/helpers/remove-element';

test('Removes element from DOM', () => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'new-div');

  const divText = document.createElement('p');
  divText.textContent += 'Child node';

  newDiv.appendChild(divText);
  document.body.appendChild(newDiv);

  removeElement('new-div');

  const gettingNewDiv = document.querySelector('#new-div');

  expect(gettingNewDiv.lastElementChild).toBeNull();
});