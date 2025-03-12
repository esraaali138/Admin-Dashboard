import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CardComponent, LoaderComponent , PaginationComponent],
  imports: [CommonModule , TranslateModule],
  exports: [CardComponent, LoaderComponent , PaginationComponent],
})
export class SharedModule {}
