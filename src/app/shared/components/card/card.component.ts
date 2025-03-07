import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: false,
})
export class CardComponent {
  @Input() title!: string;
  @Input() amount!: string;
  @Input() change!: string | null;
  @Input() icon!: string;
}
