import { myAxios } from "../services/Helper";

export const ChatTextSend=(data)=>{
    return myAxios.post('/chat_text',data).then((response)=> response.data)
}