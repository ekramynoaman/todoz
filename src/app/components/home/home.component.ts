import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private taskServ: TaskService, private title: Title) {
    this.title.setTitle('TODOZ');
   }

  ngOnInit() {
  }

  delTask(i) {
    this.taskServ.delTask(i);
  }

}
