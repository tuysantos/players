import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersSearchComponent } from './players-search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('PlayersSearchComponent', () => {
    let component: PlayersSearchComponent;
    let fixture: ComponentFixture<PlayersSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ PlayersSearchComponent ],
          providers: [
          ],
          imports: [ FormsModule, CommonModule ],
        })
        .compileComponents();
      }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayersSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        });

    it('should create', () => {
        expect(component).toBeTruthy();
        });

    it('should emit a search event', () => {
        spyOn(component.searchChanged, 'emit');
        component.model.searchText = 'en';
        component.selectedSearchType = 1;
        var temp = {type: 1, searchText: 'en'};
        component.searchCondition();

        fixture.detectChanges();
        expect(component.searchChanged.emit).toHaveBeenCalled();
        expect(component.searchChanged.emit).toHaveBeenCalledWith(temp);
        expect(component.seachCriteria.type).toEqual(1);
        expect(component.seachCriteria.searchText).toEqual('en');
        });

    it('should reset search TextBox', () => {
        component.onSelectionChange(1);
        expect(component.model.searchText).toEqual('');
        });
});