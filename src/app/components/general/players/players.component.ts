import { Component, OnInit } from "@angular/core";
import { IPlayer, IPagedResults, ISearchCriteria } from "../../shared/interfaces";
import { Router } from "@angular/router";
import { PlayerService } from "../../../services/player.service";
import { DataFilterService } from "../../../services/data-filter.service";
import { take } from "rxjs/operators";
import { StorageService } from "../../../services/storage.service";

@Component({ 
    selector: 'app-players', 
    templateUrl: './players.component.html'
  })
  export class PlayersComponent implements OnInit {

    title: string;
    players: IPlayer[] = [];
    filteredPlayers: IPlayer[] = [];
    searchFilter: ISearchCriteria = {type:1, searchText: ''};

    totalRecords: number = 0;
    pageSize: number = 10;
    grandTotalRecords: number = 0;
    label: string = 'Filter table';
    recordsFound: boolean = false;
    newSaerch: number = 0;

    constructor(private router: Router, 
        private playerService: PlayerService,
        private dataFilter: DataFilterService,
        private storageService: StorageService){}

    ngOnInit() {
        this.title = 'Players';
        this.storageService.setUserName('admin');
        this.storageService.setUserPassword('test123');
      }

    getPlayersWithPagination(page: number): void {
        this.playerService.getPlayersWithPagination((page - 1) * this.pageSize, this.pageSize)
            .pipe(take(1))
            .subscribe((response: IPagedResults<IPlayer[]>) => {
                this.players = this.filteredPlayers = response.results;
                this.totalRecords = response.totalRecords;
                this.grandTotalRecords = response.totalRecords;
                this.recordsFound = this.grandTotalRecords > 0;
            },
            (err: any) => console.log(err),
            () => console.log('getPlayersWithPagination() retrieved players'));
        }

    findPlayersWithPagination(searchCriteria: string, page: number): void {
        this.playerService.findPlayersWithPagination(searchCriteria, (page - 1) * this.pageSize, this.pageSize)
            .pipe(take(1))
            .subscribe((response: IPagedResults<IPlayer[]>) => {
                this.players = this.filteredPlayers = response.results;
                this.totalRecords = response.totalRecords;
                this.grandTotalRecords = response.totalRecords;
                this.recordsFound = this.grandTotalRecords > 0;
            },
            (err: any) => console.log(err),
            () => console.log('getPlayersWithPagination() retrieved players'));
    }

    filterChanged(filterText: string) {
        if (filterText && this.players) {
            let props = ['firstName', 'lastName', 'position', 'nationality'];
            this.filteredPlayers = this.dataFilter.filter(this.players, props, filterText);
            this.totalRecords = this.filteredPlayers.length;
        }
        else {
          this.filteredPlayers = this.players;
          this.totalRecords = this.grandTotalRecords;
        }
      }
    
    pageChanged(page: number) {
        if(this.searchFilter.type === 1){
            this.getPlayersWithPagination(page);
        }
        else {
            this.findPlayersWithPagination(this.searchFilter.searchText, page);
        }
      }

    searchData(criteria: ISearchCriteria): void {
        this.searchFilter = criteria;
        this.newSaerch++;
        if(criteria.type === 1){
            this.getPlayersWithPagination(1);
        }
        else {
            this.findPlayersWithPagination(criteria.searchText, 1);
        }
        
    }
  }