import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { TrimPipe } from './components/shared/pipes/trim.pipe';
import { FilterTextComponent } from './components/shared/filterText/filter-text.component';

@NgModule({
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [TrimPipe, FilterTextComponent, PaginationComponent ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule, TrimPipe, FilterTextComponent, PaginationComponent ]
})
export class SharedModule { }
