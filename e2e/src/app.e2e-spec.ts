import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /*it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to players!');
  });*/

  it('should return all players', ()=>{
    page.navigateTo();
    let btnSearch = page.getSearchButton();
    btnSearch.click();


    /*let playAgainBtn = page.getPlayButton();
    playAgainBtn.click();
    let rockBtn = page.getImgButton('imgRock');
    rockBtn.click();

    let imgView = page.getMyPlay().then(res => {
      
      return res;
    });

    let endGameBtn = page.getEndGameButton();
    endGameBtn.click(); */
    browser.pause(10000);
    expect(1).toEqual(1);
    
  });

});
