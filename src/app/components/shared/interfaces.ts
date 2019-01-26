

export interface IPlayer {
  firstName   : string,
  lastName    : string,
  position    : string,
  nationality : string
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface ISearchCriteria {
  type: number;
  searchText: string
}

export interface ISearchModel {
  value:number, 
  description: string
}