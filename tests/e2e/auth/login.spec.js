import {test} from '@playwright/test'
import {LoginPage} from '../../../pages/login.page'

let loginPage;

test.beforeEach(async ({page}) =>{
    loginPage = new LoginPage(page);
    await page.goto(process.env.TEST_URL);
});

test('valid login', async() => {
    await loginPage.login(process.env.TEST_USERNAME, process.env.TEST_PASSWORD);
    await loginPage.isLoginSuccessful();
});

const invalidCases = [
  { name: 'wrong password', user: process.env.TEST_USERNAME, pass: 'wrong' },
  { name: 'wrong username', user: 'invalid', pass: process.env.TEST_PASSWORD },
  { name: 'both invalid', user: 'standard', pass: 'user' },
  { name: 'empty password', user: process.env.TEST_USERNAME, pass: '' },
  { name: 'empty username', user: '', pass: process.env.TEST_PASSWORD },
  { name: 'both empty', user: '', pass: '' },
];

invalidCases.forEach(({ name, user, pass }) => {
  test(`invalid login - ${name}`, async () => {
      await loginPage.login(user, pass);
      await loginPage.isLoginFailed();
  });
});


// test('invalid login - wrong password', async() =>{
//     await loginPage.login(process.env.TEST_USERNAME, 'wrong');
// });

// test('invalid login - wrong username', async() =>{
//     await loginPage.login('invalid', process.env.TEST_PASSWORD);
// });

// test('invalid login', async() => {
//     await loginPage.login('standard', 'user');
// });

// test('invalid login - empty password', async() => {
//     await loginPage.login(process.env.TEST_USERNAME,'' );
// });

// test('invalid login - empty username', async() => {
//     await loginPage.login('',process.env.TEST_PASSWORD );
// });

// test('invalid login - both. empty', async() => {
//     await loginPage.login('','' );
// });

