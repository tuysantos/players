import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IPlayer, IPagedResults } from '../components/shared/interfaces';

@Injectable({
        providedIn: 'root'
    })
export class PlayerService {

    constructor(private http: HttpClient){}

    getPlayersWithPagination(page: number, pageSize: number) : Observable<IPagedResults<IPlayer[]>> {
        return this.http.get<IPlayer[]>(`${environment.baseUrl}/${page}/${pageSize}`, { observe: 'response' })
            .pipe(
                    map((res) => {
                        const totalRecords = +res.headers.get('X-PlayerCount');
                        let players = res.body as IPlayer[];
                        return {
                            results: players,
                            totalRecords: totalRecords
                        };
                    }),
                    catchError(this.handleError)
                );
    }

    findPlayersWithPagination(searchText: string, page: number, pageSize: number) : Observable<IPagedResults<IPlayer[]>> {
        return this.http.get<IPlayer[]>(`${environment.baseUrl}/${searchText}/${page}/${pageSize}`, { observe: 'response' })
            .pipe(
                    map((res) => {
                        const totalRecords = +res.headers.get('X-PlayerCount');
                        let players = res.body as IPlayer[];
                        return {
                            results: players,
                            totalRecords: totalRecords
                        };
                    }),
                    catchError(this.handleError)
                );
    }

    getPlayers() : Observable<IPlayer[]> {
        return this.http.get<IPlayer[]>(environment.baseUrl)
            .pipe(
                   map((customers: IPlayer[]) => {
                       return customers;
                   }),
                   catchError(this.handleError)
                );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }
}