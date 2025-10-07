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

    findById(id: number): ToDo | undefined {
        console.log(`Looking for a todo with id: ${id}`)
        const todo = this.todos.filter((todo) => id === todo.id)[0];
        if (todo) {
            console.log(`Todo with id ${id} is found:`, todo);
        } else {
            console.log(`Todo with id ${id} is not found`);
        }
        return todo;
    }

    update(id: number, status: 'TODO' | "DONE") {
        console.log(`Updating todo with id: ${id} with status: ${status}`)
        this.todos.forEach(todo => {
            if (id === todo.id) {
                todo.status = status;
            }
        });
    }

    public count(): number {
        console.log(`Counting the number of todos in the list`)
        return this.todos.length;
    }

    public print(todo: ToDo | undefined) {
        if (todo)
            console.log(todo);
    }

    public deleteById(id: number) {
        console.log(`Deleting todo with id: ${id}`);
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }


    public displayToDos() {
        console.log(`There are ${this.count()} todo(s) in the todo list`);
        this.todos.forEach(todo => {
            this.print(todo);
        })
    }
}