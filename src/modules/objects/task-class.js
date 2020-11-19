class Task {
  constructor(title, description, dueDate, priority, notes, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
  }
}

export default Task;