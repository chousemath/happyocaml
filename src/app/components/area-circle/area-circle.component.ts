import { Component, OnInit, Input } from '@angular/core';
import * as M from 'basicmathfunc';

@Component({
  selector: 'app-area-circle',
  templateUrl: './area-circle.component.html',
  styleUrls: ['./area-circle.component.css']
})
export class AreaCircleComponent implements OnInit {
  @Input() gistId: string;
  radiusAreaCircle = 0;
  areaCircle = 0;

  constructor() { }

  ngOnInit() {
  }

  calcAreaCircle(radius: number) {
    this.areaCircle = M.areaCircle(radius);
  }

}
