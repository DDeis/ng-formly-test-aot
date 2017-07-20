import { FormlyTestAotPage } from './app.po';

describe('formly-test-aot App', () => {
  let page: FormlyTestAotPage;

  beforeEach(() => {
    page = new FormlyTestAotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
