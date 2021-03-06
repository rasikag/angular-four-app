import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges{


  @Input('svrElement') element: {type: string, name: string, content: string};

  constructor() {
    
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  
  
}
