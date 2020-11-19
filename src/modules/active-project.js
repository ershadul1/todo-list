
import removeElements from '../helpers/remove-element';
import taskForm from './forms/task-form';
import createTask from '../modules/objects/create-new-task';
import projectList from './objects/project-list';

const activeProject = (index) => {

  removeElements('inner-container');

  taskForm(index);

  console.log(projectList[index])
}

export default activeProject;