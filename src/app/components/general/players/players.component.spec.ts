import { async, ComponentFixture, TestBed, inject, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of as ObservableOf} from 'rxjs';

import { PlayersComponent } from './players.component';
import { PlayerService } from '../../../services/player.service';
import { DataFilterService } from '../../../services/data-filter.service';
import { StorageService } from '../../../services/storage.service';
import { playersMock } from './fixtures';
import { IPlayer, ISearchCriteria } from '../../shared/interfaces';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

class PlayerServiceMock {
    getPlayersWithPagination(page: number): Observable<IPlayer[]> {
        return ObservableOf(playersMock);
    }

    findPlayersWithPagination(searchCriteria: string, page: number): Observable<IPlayer[]>  {
        return ObservableOf(playersMock);
    }

 }

class DataFilterServiceMock {

}

class StorageServiceMock {
    setUserName(user: string):void{};
    setUserPassword(password: string):void{};
}

describe('PlayersComponent', () => {
    let component: PlayersComponent;
    let fixture: ComponentFixture<PlayersComponent>;
    const router = jasmine.createSpyObj('Router', ['navigate']);
    let playerService: PlayerService;
    let dataFilterService: DataFilterService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ PlayersComponent ],
          providers: [
            {provide: PlayerService, useClass : PlayerServiceMock},
            //{provide: DataFilterService, useClass : DataFilterServiceMock},
            {provide: StorageService, useClass : StorageServiceMock},
            { provide: Router, useValue: router },
            DataFilterService
            
          ],
          imports: [ FormsModule, CommonModule, HttpClientModule ],
          schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
      }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayersComponent);
        playerService = TestBed.get(PlayerService);
        dataFilterService = TestBed.get(DataFilterService);
        component = fixture.componentInstance;
        fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('should get all players', () => {
            spyOn(playerService, 'getPlayersWithPagination').and.returnValue(ObservableOf(playersMock));
            component.getPlayersWithPagination(1);
            fixture.detectChanges();
            expect(playerService.getPlayersWithPagination).toHaveBeenCalled();
            expect(playerService.getPlayersWithPagination).toHaveBeenCalledWith(0,10);
        });
   
        it('should find players', () => {
            spyOn(playerService, 'findPlayersWithPagination').and.returnValue(ObservableOf(playersMock));
            component.findPlayersWithPagination('An', 1);

            fixture.detectChanges();
            expect(playerService.findPlayersWithPagination).toHaveBeenCalled();
            expect(playerService.findPlayersWithPagination).toHaveBeenCalledWith('An',0,10);
        });

        it('should search data', () => {
            spyOn(component, 'getPlayersWithPagination');
            var search : ISearchCriteria = {type: 1, searchText: 'An'};
            component.newSaerch = 0;
            component.searchData(search);

            expect(component.newSaerch).toEqual(1);
            expect(component.searchFilter.searchText).toEqual('An');
            expect(component.getPlayersWithPagination).toHaveBeenCalled();
            expect(component.getPlayersWithPagination).toHaveBeenCalledWith(1);
        });

        it('should filter the list', ()=>{
            var filteredData = [
                { firstName: 'Ryan', lastName: 'Babel', position: 'CB', nationality: 'ENG' },
                { firstName: 'John', lastName: 'Barnes', position: 'LM', nationality: 'ENG' },
                { firstName: 'Andy', lastName: 'Gray', position: 'LB', nationality: 'ENG' }];

            var criteria = 'ENG';
            component.players = playersMock;
            component.filterChanged(criteria);
            fixture.detectChanges();
            expect(component.filteredPlayers).toEqual(filteredData);
            expect(component.totalRecords).toEqual(3);
        });

        it('should trigger get all players service method', ()=>{
            var page = 1;
            spyOn(component, 'getPlayersWithPagination');
            component.searchFilter.type = 1;
            component.pageChanged(page);
            fixture.detectChanges();
            expect(component.getPlayersWithPagination).toHaveBeenCalled();
        });

        it('should trigger find players service method', ()=>{
            var page = 1;
            spyOn(component, 'findPlayersWithPagination');
            component.searchFilter.type = 2;
            component.pageChanged(page);
            fixture.detectChanges();
            expect(component.findPlayersWithPagination).toHaveBeenCalled();
        });
});

