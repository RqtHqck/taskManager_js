const createTaskBtn = document.querySelector('.input-main-button')
const createTaskInput = document.querySelector('.input-main-input')

// Кнопки задачи
// const deleteTask = document.querySelector('#deleteTask')
// const taskToFavourite = document.querySelector('#taskToFavourite')
// const taskTitle = document.querySelector('.task-title')

// Кнопки хедера
const cleanTasksBtn = document.querySelector('#deleteTasks')
const sortTasksBtn = document.querySelector('#sortTasks')

// Области работы
const allTaskList = document.querySelectorAll('.tasks')
const taskList = document.querySelector('.task-list')
const resolvedTaskList = document.querySelector('.resolved-task-list')

let tasks = []
let doneTasks = []

createTaskBtn.addEventListener('click', () => {
  taskPoleText = createTaskInput.value;
  
  if (!taskPoleText) {
    return alert('Не введён никакой текст');
  }

  const taskComponent = /*html*/`
    <li class="task">
      <div class="task-checkbox-items">
        <label>
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-radio done-btn"></span>
        </label>
        <div class="task-title">${taskPoleText}</div>
      </div>
      <div class="task-data-items">
        <span><time datetime="2024-08-19">20.08.2024</time></span>
        <button class="button task-favourite-button" title="Task to favourite"><div class="box-favourite-img"><img src="./icons/main/favourite-fill.png" id="task_to_favourite_fill" class="hidden" alt="Favourite" width="18" height="18" /><img src="./icons/main/favourite-empty-normal.png" alt="Favourite" width="20" height="20" /></div></button>
        <button class="button task-delete-button" title="Delete task"><img src="./icons/main/delete-task.png" alt="Close" width="22" height="22"></button>
      </div>
      </li>`

  taskList.insertAdjacentHTML('beforeend', taskComponent);

  createTaskInput.focus();
  createTaskInput.value = '';
  console.log(`Created task "${taskPoleText}"`)
})


document.addEventListener('keydown', (event) => {
  
  if (document.activeElement === createTaskInput) {
    switch (event.key) {
      case 'Enter':
        // Функция обработки нажатия клавиши ENTER в фокусе на инпут поле создания задачи
        event.preventDefault();
        clickEnterInputFocus(event);
        break;
      case 'Escape':
        // Функция обработки нажатия клавиши ESCAPE в фокусе на инпут поле создания задачи
        clickEscapeInputFocus(event);
        break;
    }
  }
})

function clickEnterInputFocus(event) {
  console.log(event.code);
  createTaskBtn.click();   // Создаём задачу
}

function clickEscapeInputFocus(event) {
  console.log(event.code);
  createTaskInput.blur(); // Убираем фокус с инпут поля
}


function doneTask(task, isChecked) {
  console.log('done-task');
  const taskTitle = task.querySelector('.task-title');
  if (!isChecked) {
    taskTitle.classList.add('task-title-done');
    resolvedTaskList.append(task);
  } else {
    taskTitle.classList.remove('task-title-done');
    taskList.append(task);
  }
}


function deleteTask(task) {
  console.log('delete-btn');
  task.remove();
}


function toFavourite(task) {
  console.log('to-favourite-btn');
  const btn_fill = task.querySelector('#task_to_favourite_fill').classList.toggle('hidden')
}


function cleanTaskList() {
  console.log('cleanTaskList');
  if (confirm("Удалить все задачи в данной вкладке, включая выполненные?")) {
    console.log('confirm');
    document.querySelectorAll('.tasks').forEach(task => {
      task.querySelectorAll('ul').forEach(ul => ul.innerHTML = '');
    });
  }
}

cleanTasksBtn.addEventListener('click', (event) => {
  cleanTaskList(event);
})

allTaskList.forEach(taskList => {taskList.addEventListener('click', (event) => {
  const target = event.target
  const task = target.closest('.task')
  

  if (task) {
    if (target.matches('.done-btn')) {
      const checkbox = task.querySelector('.checkbox');
      doneTask(task, checkbox.checked);
    }
  
    if (target.matches('.task-delete-button') || target.closest('.task-delete-button')) {
      deleteTask(task);
    }
    if (target.matches(".task-favourite-button") || target.closest('.task-favourite-button')) {
      toFavourite(task);
    }
  }})
});