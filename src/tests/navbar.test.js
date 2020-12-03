import navbar from '../modules/layout/navbar';

test('Creates and append navbar', () => {
  document.body.innerHTML = "<div id='container'></div>";

  navbar();

  const nav = document.querySelector('nav');
  expect(nav).not.toBeNull();
});