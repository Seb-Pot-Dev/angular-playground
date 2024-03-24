import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NonStandaloneComponent } from './non-standalone/non-standalone.component';
import { nonStandAloneDirective } from './non-standalone/nonStandAlone.directive'; // Importez votre directive ici
import { noOpenerDirective } from './non-standalone/noOpener.directive';
import { confirmDirective } from './non-standalone/confirm.directive';
import { UserProfilecomponent } from './non-standalone/user-profile.component';

@NgModule({
  declarations: [NonStandaloneComponent, nonStandAloneDirective, noOpenerDirective, confirmDirective, UserProfilecomponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [NonStandaloneComponent]
})
export class AppModule { }
