import { myAxios } from "../services/Helper";

export const signUp = (data) => {
    return myAxios.post('/signUp', data).then((response) => response.data)
}