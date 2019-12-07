import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private taskServ: TaskService) { }

  ngOnInit() {
  }

  delTask(i) {
    this.taskServ.delTask(i);
  }

}
