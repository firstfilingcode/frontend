import { myAxios } from "../services/Helper";

export const resetPass=(data)=>{
    return myAxios.post('/resetPass',data).then((response)=> response.data)
}