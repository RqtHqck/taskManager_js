const createTask = document.querySelector('.input-main-button')
const createTaskInput = document.querySelector('.input-main-input')

// Кнопки задачи
const deleteTask = document.querySelector('#deleteTask')
const taskToFavourite = document.querySelector('#taskToFavourite')
const taskTitle = document.querySelector('.task-title')

// Кнопки хедера
const cleanTasks = document.querySelector('.deleteTasks')
const sortTasks = document.querySelector('.sortTasks')

// Области работы
const allTaskList = document.querySelector('.tasks')
const taskList = document.querySelector('.task-list')
const resolvedTaskList = document.querySelector('.resolved-task-list')

let tasks = []
let doneTasks = []


createTask.addEventListener('click', () => {
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
        <button class="button task-favourite-button" id="task_to_favourite" title="Task to favourite"><img src="./icons/main/favourite-empty-normal.png" alt="Favourite" width="20" height="20"></button>
        <button class="button task-delete-button" id="delete_task" title="Delete task"><img src="./icons/main/delete-task.png" alt="Close" width="22" height="22"></button>
      </div>
      </li>`

  taskList.insertAdjacentHTML('beforeend', taskComponent);

  createTaskInput.value = '';
  createTaskInput.focus();
})


function doneTask(target) {
  console.log('done-btn')
  const task = target.closest('.task');
  if (task) {
    task.querySelector('.task-title').classList.toggle('task-title-done');
  }
}


allTaskList.addEventListener('click', (event) => {
  const target = event.target;

  // Если кликнули по кастомному чекбоксу
  if (target.matches('.done-btn')) {
    doneTask(target);
  }

  // Обработка кнопок удаления и добавления в избранное
  if (target.matches('.task-delete-button')) {
    const task = target.closest('.task');
    if (task) {
      task.remove(); // Удаление задачи
    }
  }

  if (target.matches('.task-favourite-button')) {
    const task = target.closest('.task');
    if (task) {
      task.classList.toggle('favourite'); // Добавление/удаление из избранного
    }
  }
});
