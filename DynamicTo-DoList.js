<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dynamic To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 500px;
      margin: auto;
    }
    input {
      padding: 8px;
      width: 70%;
      font-size: 16px;
    }
    button {
      padding: 8px 12px;
      margin-left: 5px;
      cursor: pointer;
    }
    li {
      margin: 8px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .actions button {
      margin-left: 5px;
    }
  </style>
</head>
<body>
  <h2>Dynamic To-Do List</h2>

  <input type="text" id="taskInput" placeholder="Enter a task" />
  <button id="addBtn">Add Task</button>

  <ul id="taskList"></ul>

  <script>
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();

    addBtn.addEventListener('click', addTask);

    function addTask() {
      const text = taskInput.value.trim();
      if (text === '') return;

      tasks.push(text);
      updateLocalStorage();
      renderTasks();
      taskInput.value = '';
    }

    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = task;

        const actions = document.createElement('div');
        actions.className = 'actions';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editTask(index);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(taskText);
        li.appendChild(actions);

        taskList.appendChild(li);
      });
    }

    function editTask(index) {
      const newText = prompt('Edit task:', tasks[index]);
      if (newText !== null && newText.trim() !== '') {
        tasks[index] = newText.trim();
        updateLocalStorage();
        renderTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      updateLocalStorage();
      renderTasks();
    }

    function updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  </script>
</body>
</html>
