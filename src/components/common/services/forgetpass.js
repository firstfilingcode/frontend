import { myAxios } from "../services/Helper";

export const forgetPass=(data)=>{
    return myAxios.post('/forgetPass',data).then((response)=> response.data)
}