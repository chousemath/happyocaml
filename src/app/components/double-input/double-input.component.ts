import { Component, OnInit, Input } from '@angular/core';
import * as M from 'basicmathfunc';

@Component({
  selector: 'app-double-input',
  templateUrl: './double-input.component.html',
  styleUrls: ['./double-input.component.css']
})
export class DoubleInputComponent implements OnInit {
  @Input() gistId: string;
  @Input() title: string;
  @Input() inputLabel: string;
  @Input() valueLabel: string;
  @Input() equation: string;
  base = 0;
  height = 0;
  area = 0;

  constructor() { }

  ngOnInit() {
  }

  onBaseChange(base: number) {
    this.area = M.areaParallelogram(base, this.height);
  }

  onHeightChange(height: number) {
    this.area = M.areaParallelogram(this.base, height);
  }

}

