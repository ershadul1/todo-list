import Task from './task-class';
import getProjectList from './project-list';
import { saveToLocalStorage } from '../helpers/local-storage';

const createTask = (index) => {
  const projectList = getProjectList();
  const project = projectList[index];

  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const dueDate = document.getElementById('task-dueDate').value;
  const priorityArr = document.getElementsByName('priority');

  let priority;
  priorityArr.forEach(element => {
    if (element.checked) {
      priority = element.value;
    }
  });
  const notes = document.getElementById('task-notes').value;

  const newtask = new Task(title, description, dueDate, priority, notes);
  project.addTask(newtask);
  saveToLocalStorage(projectList);

  window.location.reload();
};

export default createTask;