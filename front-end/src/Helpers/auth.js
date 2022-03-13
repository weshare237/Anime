import { setCookie, getCookie, deleteCookie } from "./cookies"
import { setLocalStorage, getLocalStorage, deleteLocalStorage } from "./localStorage"

export const setAuthentication = (token, user) => {
    console.log('set user --------', user)
    setCookie("token", token);
    setLocalStorage('user', user);
}

export const isAuthenticated = () => {
    console.log("local storage", getLocalStorage("user"))
    if (getCookie("token") && getLocalStorage("user")) {
        console.log('Alex');
        return getLocalStorage("user")
    } else {
        return false
    }
}

export const logout = (next) => {
    deleteCookie('token');
    deleteLocalStorage('user');
    next()
}
