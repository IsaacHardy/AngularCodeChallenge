import { AngularCodeChallengePage } from './app.po';

describe('angular-code-challenge App', function() {
  let page: AngularCodeChallengePage;

  beforeEach(() => {
    page = new AngularCodeChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
