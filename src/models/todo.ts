export interface ToDo {
    id: number;
    name: string;
    description: string;
    status: "TODO" | "DONE",
    createdAt: Date;
}