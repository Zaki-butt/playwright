export async function apiRegister(request, user){
    const res = await request.post(`${process.env.TEST_BASE_URL}/register`,{
        data: user
    });

    return res;
}


export async function apiLogin(request, email, password){
    const res = await request.post(`${process.env.TEST_BASE_URL}/login`, {
        data: {email, password}
    });

    return res;
}

export async function apiMe(request, token){
    const res = await request.get(`${process.env.TEST_BASE_URL}/me`, {
        headers :{
            'Authorization' : `Bearer ${token}`,
            'Accept': 'application/json'
        }
    });

    return res;
}

export async function apiLogout(request, token){
    const res = request.post(`${process.env.TEST_BASE_URL}/logout`, {
        headers :{
            'Authorization' : `Bearer ${token}`
        }
    });

    return res;
}