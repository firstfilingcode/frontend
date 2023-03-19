import { myAxios } from "../services/Helper";

export const getContacts=(data)=>{
    return myAxios.post('/getContacts',data).then((response)=> response.data)
}
