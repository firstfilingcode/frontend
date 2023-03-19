import { myAxios } from "./Helper";

export const userInfo = (data) => {
    return myAxios.post('/userPersonalInfo', data).then((response) => response.data)
}
export const userAddress = (data) => {
    return myAxios.post('/userAddress', data).then((response) => response.data)
}

export const userBank = (data) => {
    return myAxios.post('/userBank', data).then((response) => response.data)
}