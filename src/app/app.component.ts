import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements = [
    {type: 'Test Type', name: 'Test Name', content: 'Test Content'},
    {type: 'Test Type1', name: 'Test Name1', content: 'Test Content1'}
  ];

  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }

  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed!';
  // }

  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }
}
