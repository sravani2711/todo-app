import { ToDo } from "./models/todo";
import { ToDoService } from "./service/todo.service";

export class TodoApplication {

    private readonly todoService: ToDoService;

    constructor(todoService: ToDoService) {
        this.todoService = todoService;
    }


    public init() {
        console.log("Welcome to TODO Application");


        this.todoService.displayToDos();
        this.todoService.create({
            id: 1,
            name: 'First todo',
            description: "sample description",
            status: 'TODO',
            createdAt: new Date()
        });

        this.todoService.create({
            id: 2,
            name: 'Create Todo application',
            description: "Implement findById method",
            status: 'TODO',
            createdAt: new Date()
        });

        this.todoService.displayToDos();

        const foundTodo = this.todoService.findById(2);

        this.todoService.print(foundTodo);

        this.todoService.update(1, 'DONE');
        this.todoService.displayToDos();

        this.todoService.deleteById(1);
        this.todoService.displayToDos();

        this.todoService.findById(1);
    }
}
