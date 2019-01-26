import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { IPlayer } from '../../../components/shared/interfaces';
import { SorterService } from '../../../services/sorter.service';

@Component({
    selector: 'app-players-grid', 
    templateUrl: './players-grid.component.html'
})
export class PlayersGridComponent implements OnInit {

    @Input() players: IPlayer[] = [];

    constructor(private sorterService: SorterService){}

    ngOnInit() {

    }

    sort(prop: string): void {
        this.sorterService.sort(this.players, prop);
    }
}