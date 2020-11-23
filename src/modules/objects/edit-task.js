import { saveToLocalStorage } from '../helpers/local-storage';
import getProjectList from './project-list';

const editTask = (taskIndex, index) => {
  const projectList = getProjectList();
  const currentProject = projectList[index];
  const taskList = currentProject.readTaskList;
  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const dueDate = document.getElementById('task-dueDate').value;
  const priorityArr = document.getElementsByName('priority');
  const notes = document.getElementById('task-notes').value;

  let priority;
  priorityArr.forEach(element => {
    if (element.checked) {
      priority = element.value;
    }
  });

  taskList[taskIndex].title = title;
  taskList[taskIndex].description = description;
  taskList[taskIndex].dueDate = dueDate;
  taskList[taskIndex].priority = priority;
  taskList[taskIndex].notes = notes;

  saveToLocalStorage(projectList);
  window.location.reload();
};

export default editTask;