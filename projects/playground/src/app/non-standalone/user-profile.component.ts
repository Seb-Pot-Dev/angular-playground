import { Component, Directive, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  template: `
    <div class="{{ isHired ? 'hired' : 'non-hired' }} employee-card">
      <div class="flex">
        <h3>
          Nom:{{ lastName | uppercase }} Prenom:{{ firstName | lowercase }}
        </h3>
        <img [src]="avatar" alt="" />
        <p></p>
        Métier : <strong>{{ job }}</strong>
      </div>
      <br/>
      Salaire :
      <strong>{{ revenue | currency : 'EUR' : 'symbol' }}/mois</strong>
      <button (click)="onClickButtonHire($event.clientX, $event.clientY)">
        Embaucher
      </button>
      <!-- (keydown.enter) est un event filtering, il execute la fonction uniquement en appuyant sur Enter -->
      <input
        (keydown.enter)="onInputEmploye($event)"
        type="text"
        placeholder="changer le prenom"
      />
    </div>
  `,
  styles: [
    `
      .employee-card {
        margin: 1rem;
        width: 12rem;
      }
      .hired {
        background-color: green;
      }
      .non-hired {
        background-color: red;
      }
      h3 {
        color: blue;
      }
    `,
  ],
})
export class UserProfilecomponent {
  avatar = 'https://via.placeholder.com/50';

  @Input('first-name')
  firstName = '';
  @Input('last-name')
  lastName = '';
  @Input('job')
  job = '';
  @Input('revenue')
  revenue = '';
  @Input('hired')
  isHired = false;

  onInputEmploye(event: Event) {
    let textarea = (event.target as HTMLInputElement);
    this.firstName = textarea.value;
    textarea.value = '';
  }

  onClickButtonHire(coordX: number, coordY: number) {
    this.isHired = !this.isHired;
    console.log(coordX, coordY);
  }
  constructor(private elementRef: ElementRef<HTMLElement>) {}
}
