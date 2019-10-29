import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],

})
export class TableComponent implements OnInit {
  users;
  selected: number;
  constructor(private userService: UserService) {
    this.users = this.userService.getData();
  }

  ngOnInit() {
    
  }

  getValueFromSelect(selected) {
    this.selected = selected;
  }

  getValue(event) {
    this.selected = event.target.value;
  }
}
