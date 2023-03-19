import { myAxios } from "../services/Helper";

export const UserGstin = (data) => {
    return myAxios.post('/userGstinDetails', data).then((response) => response.data)
}