const createTask = document.querySelector('.input-main-button')
const createTaskInput = document.querySelector('.input-main-input')

// Кнопки задачи
const deleteTask = document.querySelector('#deleteTask')
const taskToFavourite = document.querySelector('#taskToFavourite')
const doneTask = document.querySelector('.done-btn')

// Кнопки хедера
const cleanTasks = document.querySelector('.deleteTasks')
const sortTasks = document.querySelector('.sortTasks')

const taskList = document.querySelector('.task-list')
const resolvedTaskList = document.querySelector('.resolved-task-list')

let tasks = []
let doneTasks = []

