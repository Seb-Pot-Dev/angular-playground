import { Component, Directive, ElementRef, Input } from '@angular/core';

@Component({
  selector: '[user-profile]',
  template: `
    <div class="{{ isHired ? 'hired' : 'non-hired' }}">

      <h3>Nom:{{ lastName | uppercase }} Prenom:{{ firstName | lowercase }}</h3>
      <img src="avatar" alt="" />
      Métier : <strong>{{ job }}</strong
      ><br />
      Salaire : <strong>{{ revenue | currency : 'EUR' : 'symbol' }}/mois</strong>

    </div>
  `,
  styles: [
    `
    .hired{
        background-color: green;
    }
    .non-hired{
        background-color: red;
    }
      h3 {
        color: blue;
      }
    `,
  ],
})
export class UserProfilecomponent {
  avatar = 'https://via.placeholder.com/30';

  @Input('first-name')
  firstName = '';
  @Input('last-name')
  lastName = '';
  @Input('job')
  job = '';
  @Input('revenue')
  revenue = '';
  @Input('hired')
  isHired=false;

  constructor(private elementRef: ElementRef<HTMLElement>) {}
}
