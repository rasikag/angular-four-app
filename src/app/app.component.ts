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


  onServerAdded(data: {serverData: string, serverContent: string}) {
    this.serverElements.push({
          type: 'server',
          name: data.serverData,
          content: data.serverContent
        });
  }

  onBlueprintAdd(data : {serverData: string, serverContent: string}) {
      this.serverElements.push({
      type: 'blueprint',
      name: data.serverData,
      content: data.serverContent
    });
  }
}
