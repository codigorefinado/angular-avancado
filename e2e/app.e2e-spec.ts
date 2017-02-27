import { AngularAvancadoPage } from './app.po';

describe('angular-avancado App', () => {
  let page: AngularAvancadoPage;

  beforeEach(() => {
    page = new AngularAvancadoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
