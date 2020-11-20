import activeProject from '../active-project';

const editTask = (task, index) => {
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
  
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.priority = priority;
    task.notes = notes;
    activeProject(index);
  };
  
  export default editTask;