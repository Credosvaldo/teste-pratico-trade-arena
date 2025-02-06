import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-box',
  templateUrl: './currency-box.component.html',
  styleUrls: ['./currency-box.component.scss']
})
export class CurrencyBoxComponent {
  @Input({required: true}) name! : string;
  @Input({required: true}) image! : string;
  @Input({required: true}) unit! : string;
  @Input({required: true}) valor! : number;

}
