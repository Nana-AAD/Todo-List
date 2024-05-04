export const UIController = {
    todoForm: document.getElementById("todo-form"),
    todoInput: document.getElementById("todo-input"),
    todoListContainer: document.getElementById("todo-list"),

    displayTodos(todos) {
        this.todoListContainer.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo');
            if (todo.completed) {
                todoDiv.classList.add('completed');
            }
            todoDiv.innerHTML = `
                <li class="todo-item">${todo.task}</li>
                <button class="complete-btn" data-index="${index}"><i class="fas fa-check"></i></button>
                <button class="trash-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
            `;
            this.todoListContainer.appendChild(todoDiv);
        });
    },
    setupEventListeners() {
        this.todoForm.addEventListener('submit', e => {
            e.preventDefault();
            const task = this.todoInput.value.trim();
            if (task !== '') {
                todoList.addTodo(task);
                this.displayTodos(todoList.todos);
                this.todoInput.value = '';
            }
        });

        this.todoListContainer.addEventListener('click', e => {
            if (e.target.classList.contains('complete-btn')) {
                const index = e.target.dataset.index;
                todoList.toggleComplete(index);
                this.displayTodos(todoList.todos);
            } else if (e.target.classList.contains('trash-btn')) {
                const index = e.target.dataset.index;
                todoList.deleteTodo(index);
                this.displayTodos(todoList.todos);
            }
        });
    }
};

