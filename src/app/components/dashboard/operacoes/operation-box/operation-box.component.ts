import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operation-box',
  templateUrl: './operation-box.component.html',
  styleUrls: ['./operation-box.component.scss']
})
export class OperationBoxComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) footerMessage!: string;
}
