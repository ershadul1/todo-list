import taskForm from './forms/task-form';
import removeElement from './helpers/remove-element';
import projectList from './objects/project-list';

const activeProject = (index) => {
  removeElement('inner-container');

  const innerDiv = document.getElementById('inner-container');

  const showFormBtn = document.createElement('button');
  showFormBtn.textContent = 'Show task form';
  showFormBtn.classList.add('btn', 'btn-primary');

  innerDiv.appendChild(showFormBtn);
  taskForm(index);
  const newTaskForm = document.getElementById('task-form');
  newTaskForm.style.display = 'none';

  showFormBtn.onclick = () => {
    if (newTaskForm.style.display === 'block') {
      showFormBtn.textContent = 'Show task form';
      newTaskForm.style.display = 'none';
    } else {
      showFormBtn.textContent = 'Hide task form';
      newTaskForm.style.display = 'block';
    }
  };


  const tasksContainer = document.createElement('div');
  tasksContainer.classList.add('w-50', 'mt-5');

  const currentProjectTasks = projectList[index].readTaskList;

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
    statusButton.classList.add('btn');
    if (task.completed) {
      statusButton.textContent = 'Completed';
      statusButton.classList.add('btn-success');
    } else {
      statusButton.textContent = 'Incomplete';
      statusButton.classList.add('btn-danger');
    }
    statusButton.onclick = () => {
      if (task.completed) {
        statusButton.textContent = 'Incomplete';
        statusButton.classList.remove('btn-success');
        statusButton.classList.add('btn-danger');
        task.completed = false;
      } else {
        statusButton.textContent = 'Completed';
        statusButton.classList.remove('btn-danger');
        statusButton.classList.add('btn-success');
        task.completed = true;
      }
      console.log(task.completed);
    };


    taskBody.append(taskDescription, taskPriority, dueDate, statusButton);
    taskCont.append(taskHeader, taskBody);
    tasksContainer.appendChild(taskCont);
  });

  innerDiv.append(tasksContainer);
};

export default activeProject;