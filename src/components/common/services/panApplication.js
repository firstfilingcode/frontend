import { myAxios } from "../services/Helper";

export const panApplication = (data) => {
    return myAxios.post('/panAppSubmit', data).then((response) => response.data)
}