import { Component, OnInit } from '@angular/core';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'al-planning-workday-list',
  templateUrl: './planning-workday-list.component.html'
})
export class PlanningWorkdayListComponent implements OnInit {

  public workdays$;

  constructor() { }

  ngOnInit() {
    this.workdays$ = of([
     // Je passe remainingTasks à 0 pour tester mon composant fils :
     { dueDate: 'Lundi', doneTasks: 1, remainingTasks: 0 },
     { dueDate: 'Mardi', doneTasks: 0, remainingTasks: 2 },
     { dueDate: 'Mercredi', doneTasks: 0, remainingTasks: 1 }
    ]).pipe(delay(1000));
   }

}
