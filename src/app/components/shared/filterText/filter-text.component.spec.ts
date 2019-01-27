import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterTextComponent } from './filter-text.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('FilterTextComponent', () => {
  let component: FilterTextComponent;
  let fixture: ComponentFixture<FilterTextComponent>;
  let event = {preventDefault: function(){}};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterTextComponent ],
      imports: [ FormsModule, CommonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear the filter', () => {
    component.resetFilter();
    expect(component.model.filter).toEqual('');
  });

  it('should emit a changed event', () => {
    spyOn(component.changed, 'emit');
    component.model.filter = 'An';
    component.filterChanged(event);

    fixture.detectChanges();
    expect(component.changed.emit).toHaveBeenCalled();
    expect(component.changed.emit).toHaveBeenCalledWith('An');
  });

  it('should clear the filter on @Input() change', () => {
    component.model.filter = 'An';
    component.newSaerch = 1;
    component.resetFilter();
    expect(component.model.filter).toEqual('');
  });
});

