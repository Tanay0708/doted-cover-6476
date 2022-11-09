export const loginSuccess =(token) => ({
    type: "LOGIN_SUCCESS",
    payload : token
})

export const loginUserLoading = () => ({
    type: "LOGIN_LOADING",
    
})

export const loginUserFailure = () => ({
    type: "LOGIN_FAILURE",
    
})