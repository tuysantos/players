import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.scss']
})
export class FilterTextComponent implements OnChanges {

  model: { filter: string } = { filter: null };
  @Input() label: string = 'Filter';
  @Input() recordsFound: boolean = false;
  @Input() newSaerch: number = 0;
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(){
    this.resetFilter();
  }

  filterChanged(event: any): void {
    event.preventDefault();
    this.changed.emit(this.model.filter); 
  }

  resetFilter(){
    this.model.filter = '';
  }

}
