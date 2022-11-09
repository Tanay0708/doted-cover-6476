
const reducer =(state,action) => {
    switch(action.type) {
        case "LOGIN_SUCCESS" : {
            return {
                isAuth: true,
                token: action.payload,
                loading: false,
                isError: false
            }
        }
        case "LOGIN_FAILURE" : {
            return {
                isAuth: false,
                token: "",
                loading: false,
                isError: true,
            }
        }
        case "LOGIN_LOADING" : {
            return {
                isAuth: false,
                token: "",
                loading: true,
                isError: false
            }
        }
        default : {
            return state
        }
    }
}

export default reducer;