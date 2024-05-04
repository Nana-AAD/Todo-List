export class Todo {
  constructor(task) {
      this.task = task;
      this.completed = false;
  }
}

export class TodoList {
  constructor() {
      this.todos = [];
  }

  addTodo(task) {
      const newTodo = new Todo(task);
      this.todos.push(newTodo);
  }

  deleteTodo(index) {
      this.todos.splice(index, 1);
  }

  toggleComplete(index) {
      this.todos[index].completed = !this.todos[index].completed;
  }

  filterTodos(filter) {
      switch (filter) {
          case 'completed':
              return this.todos.filter(todo => todo.completed);
          case 'uncompleted':
              return this.todos.filter(todo => !todo.completed);
          default:
              return this.todos;
      }
  }
}

export const todoList = new TodoList();
