import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private taskServ: TaskService, private router: Router, private title: Title) {
    this.title.setTitle('Add Task');
   }

  ngOnInit() {


  }

  addTask(title, desc) {
    this.taskServ.addTask(title.value, desc.value);
    this.router.navigate(['/']);
  }

}
