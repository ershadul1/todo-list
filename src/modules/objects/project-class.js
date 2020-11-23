class Project {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.taskList = [];
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(task) {
    const index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1);
  }

  get readTaskList() {
    return this.taskList;
  }
}

export default Project;