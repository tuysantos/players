import { AppPage } from './app.po';
import { browser, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have default status', ()=>{
    page.navigateTo();
    let btnSearch = page.getSearchButton();
    let radioBtn = page.getSearchType(0);
    let filter = page.getFilterText();

    expect(radioBtn.getAttribute('value')).toEqual('1');
    expect(btnSearch.isEnabled()).toBe(true);
    expect(filter.isEnabled()).toBe(false);
    expect(filter.getAttribute('value')).toEqual('');
  });

  it('should check all players', ()=>{
    page.navigateTo();
    let btnSearch = page.getSearchButton();
    let radioBtn = page.getSearchType(0);

    btnSearch.click();
    browser.sleep(4000);

    expect(radioBtn.getAttribute('value')).toEqual('1');
    expect(btnSearch.isEnabled()).toBe(true); 
  });

  it('should check criteria radio type', ()=>{
    page.navigateTo();
    let btnSearch = page.getSearchButton();
    let txtSearch = page.getSearchTextBox();
    let radioBtn = page.getSearchType(1);
    
    radioBtn.click().then(function () {
      browser.waitForAngular();
      txtSearch.sendKeys('An');
      btnSearch.click();
    });

    browser.sleep(8000);
    expect(btnSearch.isEnabled()).toBe(true); 
    expect(txtSearch.getAttribute('value')).toEqual('An');
  });

});
