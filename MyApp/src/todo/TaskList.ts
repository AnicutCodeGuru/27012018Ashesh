import { Component } from '@angular/core';
import {Todo} from "./Todo";

@Component({
  selector: 'TaskList',
  templateUrl: './TaskList.html'
})
export class TaskList {
  myTasks:Todo[]=[];

  constructor(){
    this.myTasks.push(new Todo("Sample 1","Pending"));
    this.myTasks.push(new Todo("Sample 2","Completed"));
    this.myTasks.push(new Todo("Sample 3","Pending"));
  }

  completeTask(task:Todo){
      task.taskState="Completed";
  }
  deleteTask(index:number){
    this.myTasks.splice(index,1);
  }
}




