import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NonStandaloneComponent } from './non-standalone/non-standalone.component';
import { nonStandAloneDirective } from './non-standalone/nonStandAlone.directive'; // Importez votre directive ici
import { noOpenerDirective } from './non-standalone/noOpener.directive';
import { confirmDirective } from './non-standalone/confirm.directive';

@NgModule({
  declarations: [NonStandaloneComponent, nonStandAloneDirective, noOpenerDirective, confirmDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [NonStandaloneComponent]
})
export class AppModule { }
