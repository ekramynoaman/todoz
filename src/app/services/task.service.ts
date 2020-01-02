import { Injectable } from '@angular/core';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Array<Task> = [];

  constructor() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
    this.tasks = JSON.parse(savedTasks);
  } else {
    this.tasks = [];
  }
   }
// For delete task
  delTask(i) {
    this.tasks.splice(i, 1);
    this.saveAll();

  }

  // For Add task
  addTask(title, description) {
    this.tasks.push({
      title,
      description
    });
    this.saveAll();
  }

  // For edit task
  editTask(index, data) {
    this.tasks[index] = data;
    this.saveAll();

  }


  // For save at localstorge
  saveAll() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
