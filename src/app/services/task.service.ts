import { Injectable } from '@angular/core';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Array<Task> = [
    {
      title: 'task1',
      describtion: 'This is demo'
    }
  ];

  constructor() { }

  delTask(i) {
    this.tasks.splice(i, 1);

  }
}
