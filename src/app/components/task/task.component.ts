import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId;
  task;

  constructor(private route: ActivatedRoute, public taskServ: TaskService, private router: Router, private title: Title) {
    this.title.setTitle('Task');
   }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task   = this.taskServ.tasks[this.taskId];
  }


  editTask() {
    this.taskServ.editTask(this.taskId, this.task);
    this.router.navigate(['/']);
  }

  deletTask() {
    this.taskServ.delTask(this.taskId);
    this.router.navigate(['/']);

  }

}
