export function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
