export async function userIndex(request, token){
    return await request.get(`${process.env.TEST_BASE_URL}/users`,{
        headers: {
            Authorization : `Bearer ${token}`,
        }
    })
}


export async function storeUser(request, token, user){
    return await request.post(`${process.env.TEST_BASE_URL}/users`,{
        headers : {
            Authorization : `Bearer ${token}`,
            Content_Type : 'Application/Json',
        },
        data : user
    });
}

export async function updateUser(request, token, userId, updatedUser){
      return await request.patch(`${process.env.TEST_BASE_URL}/users/${userId}`,{
        headers : {
            Authorization : `Bearer ${token}`,
            Content_Type : 'Application/Json',
        },
        data : updateUser
    });
}


export async function deleteUser(request, token, userId){
    return await request.delete(`${process.env.TEST_BASE_URL}/users/${userId}`,{
        headers : {
            Authorization : `Bearer ${token}`,
        }
    });
}