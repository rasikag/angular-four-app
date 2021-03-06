import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesDeepComponent } from './directives-deep/directives-deep.component';
import { BasicHighlightDirective } from './basic-directive/basci-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    LifecycleComponent,
    DirectivesDeepComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
