import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-triple-input',
  templateUrl: './triple-input.component.html',
  styleUrls: ['./triple-input.component.css']
})
export class TripleInputComponent implements OnInit {
  @Input() gistId: string;
  @Input() title: string;
  @Input() inputLabel: string;
  @Input() valueLabel: string;
  @Input() equation: string;
  @Input() mathFunction: Function;
  inputValue1 = 0;
  inputValue2 = 0;
  inputValue3 = 0;
  calculatedValue = 0;

  constructor() { }

  ngOnInit() {
  }

  onInputValue1Change(inputValue1: number) {
    this.calculatedValue = this.mathFunction(inputValue1, this.inputValue2, this.inputValue3);
  }

  onInputValue2Change(inputValue2: number) {
    this.calculatedValue = this.mathFunction(this.inputValue1, inputValue2, this.inputValue3);
  }

  onInputValue3Change(inputValue3: number) {
    this.calculatedValue = this.mathFunction(this.inputValue1, this.inputValue2, inputValue3);
  }

}


