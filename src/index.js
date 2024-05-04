import { UIController } from "./ui";
import { TodoList, todoList, Todo } from "./todo";

document.addEventListener('DOMContentLoaded', () => {
    UIController.setupEventListeners();
    UIController.displayTodos(todoList.todos);
});
