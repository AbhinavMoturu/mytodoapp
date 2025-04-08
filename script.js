// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const clearCompletedBtn = document.getElementById('clearCompleted');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const viewBtns = document.querySelectorAll('.view-btn');
const folderItems = document.querySelectorAll('.folder');

// Initialize notes array
let tasks = [];

// Current folder
let currentFolder = 'All To Do Lists';

// Load tasks from local storage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
        updateTaskCount();
    }
}

// Save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a new to do list
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a to do list!');
        return;
    }
    
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
        folder: currentFolder,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    
    tasks.push(task);
    taskInput.value = '';
    
    saveTasks();
    renderTasks();
    updateTaskCount();
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
    updateTaskCount();
}

// Toggle task completion status
function toggleTaskStatus(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    
    saveTasks();
    renderTasks();
    updateTaskCount();
}

// Clear all completed tasks
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
    updateTaskCount();
}

// Update to do list count
function updateTaskCount() {
    let filteredTasks;
    
    if (currentFolder === 'All To Do Lists') {
        filteredTasks = tasks;
    } else {
        filteredTasks = tasks.filter(task => task.folder === currentFolder);
    }
    
    const totalLists = filteredTasks.length;
    taskCount.textContent = `${totalLists} to do list${totalLists !== 1 ? 's' : ''}`;
}

// Filter to do lists
function filterTasks(filter) {
    const taskItems = document.querySelectorAll('.task-item');
    
    taskItems.forEach(item => {
        const isCompleted = item.classList.contains('completed');
        
        if (filter === 'all') {
            item.style.display = 'flex';
        } else if (filter === 'active' && isCompleted) {
            item.style.display = 'none';
        } else if (filter === 'completed' && !isCompleted) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    });
}

// Search to do lists
function searchNotes(query) {
    const taskItems = document.querySelectorAll('.task-item');
    const searchTerm = query.toLowerCase();
    
    taskItems.forEach(item => {
        const taskText = item.querySelector('.task-text').textContent.toLowerCase();
        if (taskText.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Change view mode
function changeView(viewMode) {
    const notesList = document.getElementById('taskList');
    
    if (viewMode === 'grid') {
        notesList.classList.add('grid-view');
    } else {
        notesList.classList.remove('grid-view');
    }
}

// Change folder
function changeFolder(folderName) {
    currentFolder = folderName;
    renderTasks();
    updateTaskCount();
}

// Render to do lists
function renderTasks() {
    taskList.innerHTML = '';
    
    let filteredTasks;
    
    if (currentFolder === 'All To Do Lists') {
        filteredTasks = tasks;
    } else {
        filteredTasks = tasks.filter(task => task.folder === currentFolder);
    }
    
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.dataset.id = task.id;
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTaskStatus(task.id));
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'todo-content';
        
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;
        
        const dateText = document.createElement('span');
        dateText.className = 'todo-date';
        dateText.textContent = task.date || 'Today';
        
        contentDiv.appendChild(taskText);
        contentDiv.appendChild(dateText);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));
        
        li.appendChild(checkbox);
        li.appendChild(contentDiv);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
    
    // Apply current filter
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    filterTasks(activeFilter);
    
    // Apply current search
    if (searchInput.value.trim() !== '') {
        searchNotes(searchInput.value.trim());
    }
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

clearCompletedBtn.addEventListener('click', clearCompleted);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Apply filter
        filterTasks(btn.dataset.filter);
    });
});

// Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Set dark theme as default
document.body.classList.add('dark-theme');
themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
localStorage.setItem('theme', 'dark');

// Handle folder clicks
function handleFolderClick(e) {
    folderItems.forEach(item => item.classList.remove('active'));
    e.currentTarget.classList.add('active');
    changeFolder(e.currentTarget.textContent.trim());
}

// Add event listeners for app functionality
themeToggle.addEventListener('click', toggleTheme);

folderItems.forEach(item => {
    item.addEventListener('click', handleFolderClick);
});

searchInput.addEventListener('input', (e) => {
    searchNotes(e.target.value.trim());
});

viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        changeView(btn.dataset.view);
    });
});

// Load saved theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Initialize app
loadTasks();
loadThemePreference();