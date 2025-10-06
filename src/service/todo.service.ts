import { ToDo } from "../models/todo";

export class ToDoService {

    todos: Array<ToDo> = [];

    public ToDoService() {
        this.todos = [];
    }

    create(todo: ToDo): Array<ToDo> {
        console.log("Creating a todo with folowing data: ", todo);
        this.todos.push(todo);
        return this.todos;
    }

    public count(): number {
        return this.todos.length
    }

    private print(todo: ToDo) {
        console.log(`{"name": ${todo.name}, "description": ${todo.description}, "status": ${todo.status}, "createdAt": ${todo.createdAt}}`);
    }


    public displayToDos() {
        console.log(`There are ${this.count()} todo(s) in the todo list`);
        this.todos.forEach(todo => {
            this.print(todo);
        })
    }
}