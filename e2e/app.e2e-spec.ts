import { CovoitutagePage } from './app.po';

describe('covoitutage App', function() {
  let page: CovoitutagePage;

  beforeEach(() => {
    page = new CovoitutagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
