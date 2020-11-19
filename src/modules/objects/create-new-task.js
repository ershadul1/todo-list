import Task from './task-class';
import activeProject from '../active-project';
import projectList from './project-list';
import removeElements from '../helpers/remove-element';

const createTask = (index) => {
  removeElements('inner-container');
  let project = projectList[index];

  let title = document.getElementById('task-title').value;
  let description = document.getElementById('task-description').value;
  let dueDate = document.getElementById('task-dueDate').value;
  let priorityArr = document.getElementsByName('priority');

  let priority;
  priorityArr.forEach(element => {
    if(element.checked) {
      priority = element.value;
    }
  })
  let notes = document.getElementById('task-notes').value;

  let newtask = new Task(title, description, dueDate, priority, notes);
  project.addTask(newtask);

  activeProject(index);
}

export default createTask;