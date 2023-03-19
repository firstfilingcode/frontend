import { myAxios } from "../services/Helper";

export const loginUser = (data) => {
    return myAxios.post('/login', data).then((response) => response.data)
}
export const loginGoogle = (data) => {
    return myAxios.post('/googleLogin', data).then((response) => response.data)
}