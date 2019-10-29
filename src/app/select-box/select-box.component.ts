import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  selected;
  @Output() selectValue = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  getValue(event) {
    this.selected = event.target.value;
  }

  getValueFromSelectBox() {
    this.selectValue.emit(this.selected);
  }
}
