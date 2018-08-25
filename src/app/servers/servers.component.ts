import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverStartupText: string = "there is any servers yet";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer = () => {
    this.serverStartupText = "now we created a server"
  }

  onServerNameChange = (input: Event) => {
    this.serverStartupText = (<HTMLInputElement>input.target).value;
  }
}
