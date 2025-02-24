// Select DOM elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const toggleModeBtn = document.getElementById('toggle-mode');

// Event listener to add a task when "Add Task" button is clicked
addBtn.addEventListener('click', addTask);

// Event listener to add a task when "Enter" key is pressed
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;  // Prevent adding empty tasks

    const li = document.createElement('li');
    li.classList.add('task-item', 'fade-in');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    
    // Add task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';

    // Add edit and delete functionality
    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');

    // Edit task functionality
    editBtn.addEventListener('click', function() {
        const taskTextElement = li.querySelector('.task-text');
        const newText = prompt('Edit task:', taskTextElement.textContent);
        if (newText !== null) {
            taskTextElement.textContent = newText.trim();
        }
    });

    // Delete task functionality
    deleteBtn.addEventListener('click', function() {
        li.classList.add('fade-out');
        setTimeout(() => {
            li.remove();
        }, 300);  // Wait for the fade-out animation
    });
}

// Event listener to toggle dark mode
toggleModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleModeBtn.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});