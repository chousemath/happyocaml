import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-input',
  templateUrl: './single-input.component.html',
  styleUrls: ['./single-input.component.css']
})
export class SingleInputComponent implements OnInit {
  @Input() title: string;
  @Input() inputLabel: string;
  @Input() valueLabel: string;
  @Input() equation: string;
  @Input() gistId: string;
  @Input() mathFunction: Function;
  inputValue = 0;
  calculatedValue = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onInputChange(inputValue: number) {
    this.calculatedValue = this.mathFunction(inputValue);
  }

}
