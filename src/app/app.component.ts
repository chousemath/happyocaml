import { Component } from '@angular/core';
import * as MathFunction from 'basicmathfunc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  areaCircle: Function = MathFunction.areaCircle;
  areaParallelogram: Function = MathFunction.areaParallelogram;
  areaRectangle: Function = MathFunction.areaRectangle;
  areaSquare: Function = MathFunction.areaSquare;
  areaTrapezoid: Function = MathFunction.areaTrapezoid;
  areaTriangle: Function = MathFunction.areaTriangle;
}
