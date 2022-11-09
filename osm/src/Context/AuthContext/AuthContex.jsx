import { useReducer } from "react";
import reducer from "./Reducer";
import React from "react";

export const AuthContext = React.createContext();

const initState = {
    isAuth: false,
    token: "",
    isError: false,
    loading: false
}


const AuthContextProvider  = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initState);

    return (
        <div>
            <AuthContext.Provider value={{state, dispatch}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContextProvider;