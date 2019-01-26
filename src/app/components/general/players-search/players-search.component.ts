import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ISearchCriteria, ISearchModel } from "../../shared/interfaces";


@Component({
    selector: 'app-players-search',
    templateUrl: './players-search.component.html'
})
export class PlayersSearchComponent implements OnInit {

    model: { searchTypes: ISearchModel[], searchText: string } 
        = { searchTypes: [{value:1, description: 'All'}, {value:2, description: 'Criteria'}], searchText: '' };
    selectedSearchType: number = 1;
    seachCriteria : ISearchCriteria = {type:1, searchText: ''};
    @Output() searchChanged: EventEmitter<ISearchCriteria> = new EventEmitter<ISearchCriteria>();

    constructor(){}

    ngOnInit(){

    }

    searchCondition(): void {
        this.seachCriteria = {type: this.selectedSearchType, searchText: this.model.searchText};
        this.searchChanged.emit(this.seachCriteria);
    }

    onSelectionChange(type: number): void {
        this.selectedSearchType = type;
        if(type === 1){
            this.model.searchText = '';
        }
    }
}

