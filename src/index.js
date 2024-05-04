import './styles.css';
import { Todo } from './todo.js';
import { Project } from './project.js';
import { renderProjects, renderTodo, expandTodoDetails } from './ui.js';
import { saveData, loadData } from './storage.js';




let projects = [];

function deleteTodo(projectIndex, todoIndex) {
  projects[projectIndex].deleteTodo(todoIndex);
  renderTodo(projects[projectIndex]);
  saveData(projects);
}

function addNewTodo() {
  const title = prompt('Enter title:');
  const description = prompt('Enter description:');
  const dueDate = new Date(prompt('Enter due date (YYYY-MM-DD):'));
  const priority = prompt('Enter priority (low, medium, high):');

  if (title && description && dueDate && priority) {
    const newTodo = new Todo(title, description, dueDate, priority);
    projects[currentProjectIndex].addTodo(newTodo);
    renderTodo(projects[currentProjectIndex]);
    saveData(projects);
  } else {
    alert('All fields are required!');
  }
}

function createNewProject() {
  const projectName = prompt('Enter project name:');
  if (projectName) {
    const newProject = new Project(projectName);
    projects.push(newProject);
    renderProjects(projects);
    saveData(projects);
  } else {
    alert('Project name is required!');
  }
}

// Initial load
projects = loadData();
renderProjects(projects);