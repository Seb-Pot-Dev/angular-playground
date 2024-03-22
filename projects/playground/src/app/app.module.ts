import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NonStandaloneComponent } from './non-standalone/non-standalone.component';
import { nonStandAloneDirective } from './non-standalone/nonStandAlone.directive'; // Importez votre directive ici

@NgModule({
  declarations: [NonStandaloneComponent, nonStandAloneDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [NonStandaloneComponent]
})
export class AppModule { }
