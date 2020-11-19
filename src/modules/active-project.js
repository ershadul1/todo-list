import taskForm from './forms/task-form';
import removeElement from './helpers/remove-element'
import projectList from './objects/project-list';

const activeProject = (index) => {
  removeElement('inner-container');

  taskForm(index);

  const innerDiv = document.getElementById('inner-container');

  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('w-50', 'mt-5');

  const currentProjectTasks= projectList[index].readTaskList;

  currentProjectTasks.forEach(task => {
    const taskCont = document.createElement('div');
    taskCont.classList.add('card');

    const taskHeader = document.createElement('div');
    taskHeader.classList.add('card-header');
    taskHeader.textContent += task.title;

    const taskBody = document.createElement('div');
    taskBody.classList.add('card-body');

    const taskDescription = document.createElement('p');
    taskDescription.textContent += task.description;

    const taskPriority = document.createElement('p');
    taskPriority.classList.add('btn', 'btn-light');
    taskPriority.textContent += task.priority;

    const dueDate = document.createElement('p');
    dueDate.textContent += task.dueDate;

    const statusButton = document.createElement('button');
    statusButton.setAttribute('type', 'button');
    statusButton.classList.add('btn', 'btn-danger');
    statusButton.textContent += 'Incomplete'

    taskBody.append(taskDescription, taskPriority, dueDate, statusButton);
    taskCont.append(taskHeader, taskBody);
    tasksContainer.appendChild(taskCont);
  });
  
  innerDiv.appendChild(tasksContainer);
}

export default activeProject;