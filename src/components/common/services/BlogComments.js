import { myAxios } from "../services/Helper";

export const BlogComments=(data)=>{
    return myAxios.post('/getComments',data).then((response)=> response.data)
}