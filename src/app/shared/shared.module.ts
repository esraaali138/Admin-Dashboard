import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [CardComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [CardComponent, LoaderComponent],
})
export class SharedModule {}
