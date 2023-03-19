import { myAxios } from "../services/Helper";

export const news = (data) => {
    return myAxios.post('/email_subscription', data).then((response) => response.data)
}