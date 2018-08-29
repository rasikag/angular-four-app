import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName: string = '';
  newServerContent: string = '';

  @Output() serverCreated = new EventEmitter<{serverData: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverData: string, serverContent: string}>();
  

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
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
