import { ToDoService } from "./service/todo.service";
import { TodoApplication } from "./todo-app";

const todoService: ToDoService = new ToDoService();
const todoApp = new TodoApplication(todoService);
todoApp.init();