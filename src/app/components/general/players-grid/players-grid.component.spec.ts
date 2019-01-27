import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersGridComponent } from './players-grid.component';
import { SorterService } from '../../../services/sorter.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared.module';

describe('PlayersGridComponent', () => {
    let component: PlayersGridComponent;
    let fixture: ComponentFixture<PlayersGridComponent>;
    const router = jasmine.createSpyObj('Router', ['navigate']);

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ PlayersGridComponent ],
          providers: [{ provide: Router, useValue: router },SorterService],
          imports: [ FormsModule, CommonModule, SharedModule ],
          schemas: [ NO_ERRORS_SCHEMA ]
        })
        .compileComponents();
      }));

    beforeEach(() => {
    fixture = TestBed.createComponent(PlayersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
      });

    it('should sort the players list', () => {
    component.players = [
            {firstName: 'b', lastName: 'dd', position: 'CM', nationality: 'ENG'},
            {firstName: 'a', lastName: 'we', position: 'GK', nationality: 'POR'},
            {firstName: 'C', lastName: 'mmm', position: 'STK', nationality: 'SPA'}];
        component.sort('firstName');
        expect(component.players[0].firstName).toEqual('a');
        });
});

