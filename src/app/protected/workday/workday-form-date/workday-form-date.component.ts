import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'al-workday-form-date',
  templateUrl: './workday-form-date.component.html',
  styles: ["./node_modules/ngx-bootstrap/datepicker/bs-datepicker.css",
    "src/styles.scss"
   ],
})
export class WorkdayFormDateComponent implements OnInit {

  @Input() dueDate: FormControl;
  
  constructor(private localeService: BsLocaleService) { }
   
  ngOnInit() {
   this.localeService.use('fr');
  }

}
