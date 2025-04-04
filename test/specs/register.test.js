const RegisterPage = require('../pageobjects/register.page');

describe('Register Form', () => {
  it('should fill the form correctly', async () => {
    await RegisterPage.register('John Doe', 'john@mail.com', '812345678');
  });
});
