const createTask = document.querySelector('.input-main-button')
const createTaskInput = document.querySelector('.input-main-input')

// Кнопки задачи
const deleteTask = document.querySelector('#deleteTask')
const taskToFavourite = document.querySelector('#taskToFavourite')
const doneTask = document.querySelector('.done-btn')
const taskTitle = document.querySelector('.task-title')

// Кнопки хедера
const cleanTasks = document.querySelector('.deleteTasks')
const sortTasks = document.querySelector('.sortTasks')

// Области работы
const taskList = document.querySelector('.task-list')
const resolvedTaskList = document.querySelector('.resolved-task-list')

let tasks = []
let doneTasks = []



createTask.addEventListener('click', () => {
  taskText = createTaskInput.value
  
  if (!taskText) {
    return alert('Не введён никакой текст')
  }

  const taskComponent = /*html*/`
    <li class="task">
      <div class="task-checkbox-items">
        <label>
          <input type="checkbox" class="checkbox done-btn">
          <span class="checkbox-radio"></span>
        </label>
        <div class="task-title">${taskText}</div>
      </div>
      <div class="task-data-items">
        <span><time datetime="2024-08-19">20.08.2024</time></span>
        <button class="button task-favourite-button" id="task_to_favourite" title="Task to favourite"><img src="./icons/main/favourite-empty-normal.png" alt="Favourite" width="20" height="20"></button>
        <button class="button task-delete-button" id="delete_task" title="Delete task"><img src="./icons/main/delete-task.png" alt="Close" width="22" height="22"></button>
      </div>
      </li>`

  taskList.insertAdjacentHTML('beforeend', taskComponent)

  createTaskInput.value = ''
  createTaskInput.focus()
})

doneTask.addEventListener('click', (event) => {

})
