import { Component, Inject, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TaskService, Task } from '../task.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
@Inject({

})


export class HomePage {

  constructor(private taskService: TaskService, private task: Task) { }

  ngOnInit() {
    this.taskService.addTask();
    this.taskService.getTasks;
    this.taskService.deleteTask;
    this.taskService.updateTask;
  }

}

