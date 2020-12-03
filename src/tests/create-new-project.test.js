import { createNewProject } from '../modules/objects/create-new-project';

test('Creates a new project', () => {
  const title = 'Project title';
  const description = 'Description';
  const dueDate = '12/03/20';
  const taskList = [];
  const projectList = [];
  const newProject = {title: title, description: description, dueDate: dueDate, taskList: taskList};

  expect(createNewProject(title, description, dueDate, projectList)).toEqual([newProject]);
})