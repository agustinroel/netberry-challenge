export class TaskModel {
    id: number;
    title: string;
    content: string;
    tag: string;
    
    constructor(){
        this.id = 0;
        this.title = '';
        this.content = '';
        this.tag = '';
    }
}
