import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {

  newServerName: string = '';
  newServerContent: string = '';

  @ViewChild('viewChildReference') serverControlInput;

  @Output('sc') serverCreated = new EventEmitter<{serverData: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverData: string, serverContent: string}>();
  

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {

    let viewChildValue = this.serverControlInput.nativeElement.value;
    
    this.serverCreated.emit(
      {serverData: this.newServerName, 
        serverContent: this.newServerContent}
    );
  }
  
  onAddBlueprint() {
    this.blueprintCreated.emit(
      {serverData: this.newServerName, 
        serverContent: this.newServerContent}
    );
  }

}
