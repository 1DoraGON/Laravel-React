import { createContext } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null
})


export const ContextProvider = ({ children })