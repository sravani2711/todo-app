import { ToDo } from "./models/todo";
import { ToDoService } from "./service/todo.service";

export class TodoApplication {

    private readonly todoService: ToDoService;

    constructor(todoService: ToDoService) {
        this.todoService = todoService;
    }


    public init() {
        console.log("Welcome to TODO Application");

        const todo: ToDo = {
            id: 1,
            name: 'First todo',
            description: "sample description",
            status: 'TODO',
            createdAt: new Date()
        }

        this.todoService.displayToDos();
        const updatedToDos = this.todoService.create(todo);
        this.todoService.displayToDos();


    }
}
