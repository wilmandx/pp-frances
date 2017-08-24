import { PpFrancesPage } from './app.po';

describe('pp-frances App', () => {
  let page: PpFrancesPage;

  beforeEach(() => {
    page = new PpFrancesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
