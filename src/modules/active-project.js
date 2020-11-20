import taskForm from './forms/task-form';
import removeElement from './helpers/remove-element';
import projectList from './objects/project-list';
import editTaskForm from './forms/edit-task-form';

const activeProject = (index) => {
  removeElement('inner-container');

  const innerDiv = document.getElementById('inner-container');

  const projectTitle = document.createElement('h1');
  projectTitle.textContent += projectList[index].title;
  projectTitle.classList.add('mb-3');

  const showFormBtn = document.createElement('button');
  showFormBtn.textContent = 'Show task form';
  showFormBtn.classList.add('btn', 'btn-primary');

  innerDiv.append(projectTitle, showFormBtn);
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
    if (task.priority === 'high') {
      taskPriority.classList.add('btn', 'btn-sm', 'btn-danger');
    } else if (task.priority === 'medium') {
      taskPriority.classList.add('btn', 'btn-sm', 'btn-warning');
    } else {
      taskPriority.classList.add('btn', 'btn-sm', 'btn-info');
    }

    taskPriority.textContent += task.priority;

    const dueDate = document.createElement('p');
    dueDate.textContent += task.dueDate;

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('d-flex', 'justify-content-between');

    const btnSpan = document.createElement('span');

    const statusButton = document.createElement('button');
    statusButton.setAttribute('type', 'button');
    statusButton.classList.add('btn');
    if (task.completed) {
      statusButton.textContent = 'Completed';
      statusButton.classList.add('btn-success');
    } else {
      statusButton.textContent = 'Incomplete';
      statusButton.classList.add('btn-dark');
    }
    statusButton.onclick = () => {
      if (task.completed) {
        statusButton.textContent = 'Incomplete';
        statusButton.classList.remove('btn-success');
        statusButton.classList.add('btn-dark');
        task.completed = false;
      } else {
        statusButton.textContent = 'Completed';
        statusButton.classList.remove('btn-dark');
        statusButton.classList.add('btn-success');
        task.completed = true;
      }
      console.log(task.completed);
    };

    const editButton = document.createElement('button');
    editButton.setAttribute('type', 'button');
    editButton.classList.add('btn', 'btn-outline-primary', 'mx-2');
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
      removeElement('inner-container');
      editTaskForm(task, index);
    }

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.classList.add('btn', 'btn-outline-secondary');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
      const project = projectList[index];
      project.removeTask(task);
      activeProject(index);
    }

    btnSpan.append(editButton, deleteButton);
    btnContainer.append(statusButton, btnSpan);
    taskBody.append(taskDescription, taskPriority, dueDate, btnContainer);
    taskCont.append(taskHeader, taskBody);
    tasksContainer.appendChild(taskCont);
  });

  innerDiv.append(tasksContainer);
};

export default activeProject;