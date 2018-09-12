import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-deep',
  templateUrl: './directives-deep.component.html',
  styleUrls: ['./directives-deep.component.css']
})
export class DirectivesDeepComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5];
  onlyOdd = false;

  constructor() { }

  ngOnInit() {
  }

}
