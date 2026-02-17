import {test, expect} from '@playwright/test';
import { apiRegister, apiLogin, apiMe, apiLogout } from '../../utils/apiClient';

let token;

test.beforeEach(async ({request})=>{
    const res = await apiLogin(request,process.env.TEST_USER_EMAIL, process.env.TEST_USER_PASSWORD );
    expect(res.status()).toBe(200);

    const body = await res.json();
    token = body.token;
});

test('register case', async({request}) =>{

    const email = `user${Date.now()}@test.com`;
    const res = await apiRegister(request, {
        name: 'test1',
        email: email,
        password : process.env.TEST_USER_PASSWORD,
        password_confirmation : process.env.TEST_USER_PASSWORD,
    });

    expect(res.status()).toBe(201);

    const body = await res.json();
    expect(body).toHaveProperty('token');
});


test('login user', async() =>{
   expect(token).toBeTruthy();
});


test('auth me', async({request})=>{
    const res = await apiMe(request, token);
    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body.user.email).toBe(process.env.TEST_USER_EMAIL);
});

test("auth logout", async({request}) => {
    const res = await apiLogout(request, token);
    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('message');
});