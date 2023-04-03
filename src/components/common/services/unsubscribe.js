import { myAxios } from "./Helper";

export const unsubscribe=(data)=>{
    return myAxios.post('/unsubscribe',data).then((response)=> response.data)
}