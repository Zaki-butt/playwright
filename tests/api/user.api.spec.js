import {test, expect} from '@playwright/test'
import {userIndex, storeUser} from '../../utils/user'
import {apiLogin} from '../../utils/apiClient'

let token;

test.beforeEach(async({request})=>{
   const res = await apiLogin(request, process.env.TEST_USER_EMAIL, process.env.TEST_USER_PASSWORD);
   expect(res.status()).toBe(200);
   const body = await res.json();
   token = body.token;
});

test('user Crud flow case', async({request})=>{
    const indexRes = await userIndex(request, token);
    await expect(indexRes.status()).toBe(200);

    const newUser = {
        name : `TestUser${Date.now()}`,
        email : `testEmail${Date.now()}@test.com`,
        password : `password123`,
        password_confirmation : 'password123',
    }

    const createRes = await storeUser(request, token, newUser);
    expect(createRes.status()).toBe(201);
    const createUser =  await createRes.json();
    const userId = createUser.data.id;

    const updateRes = await updateUser(request, token, userId, {
        name : "Zakria Butt"
    });
    expect(updateRes.status()).toBe(200);

    const updatedBody = await updateRes.json();
    expect(updatedBody.data.name).toBe("Zakria Butt");

    const deleteRes = await deleteUser(request, token, userId);
    expect(deleteRes.status()).toBe(200);
});