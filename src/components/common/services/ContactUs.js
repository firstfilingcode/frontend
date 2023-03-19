import { myAxios } from "../services/Helper";

export const ContactUs=(data)=>{
    return myAxios.post('/contactUs',data).then((response)=> response.data)
}