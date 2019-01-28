import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSearchButton(){
    return element(by.id('btnSearch'));
  }

  getSearchTextBox(){
    return element(by.id('searchText'));
  }

  getSearchType(type: number){
    return element(by.className('class' + type));
  }

  getFilterText(){
    return element(by.id('txtFilter'));
  }
}
