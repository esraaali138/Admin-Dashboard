import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
  standalone: false,
})
export class PaginationComponent {
  isRTL = false;

  constructor(private translationService: TranslationService) {
    this.translationService.language$.subscribe((lang) => {
      this.isRTL = lang === 'ar';
    });
  }

  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 5;
  @Input() totalItems: number = 0;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}
