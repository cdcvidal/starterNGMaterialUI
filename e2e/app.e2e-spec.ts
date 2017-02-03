import { StarterMaterialUIPage } from './app.po';

describe('starter-material-ui App', function() {
  let page: StarterMaterialUIPage;

  beforeEach(() => {
    page = new StarterMaterialUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
