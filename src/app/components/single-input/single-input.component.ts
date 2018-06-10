import { Component, OnInit, Input } from '@angular/core';
import * as M from 'basicmathfunc';

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
  radius = 0;
  area = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onRadiusChange(radius: number) {
    this.area = M.areaCircle(radius);
  }

}
