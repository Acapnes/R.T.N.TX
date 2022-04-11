import { TaskDTO } from "../dto/task.dto";

export class TaskAPI{
    public static async getAll(): Promise<TaskDTO[]>{
        const resp = await fetch("http://localhost:3000/users/",{
            method:"GET"
        })

        const data = await resp.json();

        return data;
    }
}