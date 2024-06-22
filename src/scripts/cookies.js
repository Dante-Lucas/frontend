import Cookies from "js-cookie";

export const getCsrfToken = () => {
    return Cookies.get("csrftoken")
}

export const setCsrfToken = (token) => {
    Cookies.set("csrftoken", token)
}

export const deleteCsrfToken = () => {
    Cookies.remove("csrftoken")
}