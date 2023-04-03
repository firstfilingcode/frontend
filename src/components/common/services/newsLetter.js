import { myAxios } from "../services/Helper";

export const news = (data) => {
    return myAxios.post('/email_subscription', data).then((response) => response.data)
}
export const getPageSearch = (data) => {
    return myAxios.post('/getPageSearch', data).then((response) => response.data)
}