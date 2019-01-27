import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getSearchButton(){
    return element(by.id('btnSearch'));
  }

  getSearchTextBox(){
    return element(by.id('searchText'));
  }

  getSearchType(){
    return element(by.id('searchTypes'));
  }

  getFilterText(){
    return element(by.id('txtFilter'));
  }
}
