document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <div>
            <button class="completeButton">Complete</button>
            <button class="editButton">Edit</button>
          </div>
        `;
        taskList.appendChild(taskItem);
  
        const completeButton = taskItem.querySelector('.completeButton');
        const editButton = taskItem.querySelector('.editButton');
  
        completeButton.addEventListener('click', () => {
          taskItem.classList.toggle('completed');
        });
  
        editButton.addEventListener('click', () => {
          const updatedText = prompt('Edit the task:', taskText);
          if (updatedText !== null) {
            taskItem.querySelector('span').textContent = updatedText;
          }
        });
  
        taskInput.value = '';
      }
    }
  });
  