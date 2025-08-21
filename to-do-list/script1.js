let tasks = [];

function renderTasks(filter = 'all') {
  const taskList = document.getElementById("taskList");
  const completedCount = document.getElementById("completedCount");
  const remainingCount = document.getElementById("remainingCount");

  taskList.innerHTML = "";
  let completed = 0;
  let remaining = 0;

  tasks.forEach((task, index) => {
    const shouldDisplay =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed);

    if (!shouldDisplay) return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span style="${task.completed ? 'text-decoration: line-through;' : ''}">${task.text}</span>
      <div class="task-actions">
        <button class="complete-btn" onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);

    if (task.completed) completed++;
    else remaining++;
  });

  completedCount.textContent = completed;
  remainingCount.textContent = remaining;
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const text = taskInput.value.trim();
  if (text === "") return;
  tasks.push({ text, completed: false });
  taskInput.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function clearAllTasks() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    tasks = [];
    renderTasks();
  }
}

function filterTasks(type) {
  renderTasks(type);
}

window.onload = () => renderTasks();
