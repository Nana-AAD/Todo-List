const projectsContainer = document.getElementById('projects');
const todosContainer = document.getElementById('todo');
const todoDetailsContainer = document.getElementById('todo-details');

export function renderProjects(projects){
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const projectDiv  = document.createElement('div');
        projectDiv.textContent = project.name;
        projectDiv.addEventListener('click', () => renderTodo(project));
        projectsContainer.appendChild(projectDiv);
    });
}

export function renderTodos(project){
    todosContainer.innerHTML = '';

    project.todos.forEach((todo, index) => {
        const todoDiv = document.createElement('div');
        todoDiv.textContent = `${todo.title} - ${todo.dueDate}`;
        todoDiv.style.color = todo.priority === 'high' ? 'red' : todo.priority === 'medium' ? 'orange' : 'black';
        todoDiv.addEventListener('click', () => expandTodoDetails(todo, index));
        todosContainer.appendChild(todoDiv);
    });
}
export function expandTodoDetails(todo, index) {
        const todoDetailsContainer = document.getElementById('todo-details');
        todoDetailsContainer.innerHTML = '';
      
        const titleInput = document.createElement('input');
        titleInput.value = todo.title;
        titleInput.addEventListener('input', (event) => {
          todo.title = event.target.value;
          saveData();
        });
        todoDetailsContainer.appendChild(titleInput);
      
        const descriptionInput = document.createElement('textarea');
        descriptionInput.value = todo.description;
        descriptionInput.addEventListener('input', (event) => {
          todo.description = event.target.value;
          saveData();
        });
        todoDetailsContainer.appendChild(descriptionInput);
      
        const dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.value = todo.dueDate.toISOString().split('T')[0];
        dueDateInput.addEventListener('input', (event) => {
          todo.dueDate = new Date(event.target.value);
          saveData();
        });
        todoDetailsContainer.appendChild(dueDateInput);
      
        const prioritySelect = document.createElement('select');
        const priorities = ['low', 'medium', 'high'];
        priorities.forEach(priority => {
          const option = document.createElement('option');
          option.value = priority;
          option.textContent = priority;
          prioritySelect.appendChild(option);
        });
        prioritySelect.value = todo.priority;
        prioritySelect.addEventListener('change', (event) => {
          todo.priority = event.target.value;
          saveData();
        });
        todoDetailsContainer.appendChild(prioritySelect);
      
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          deleteTodo(currentProjectIndex, index);
        });
        todoDetailsContainer.appendChild(deleteButton);
      }
      
