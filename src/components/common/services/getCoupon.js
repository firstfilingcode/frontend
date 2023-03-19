import { myAxios } from "../services/Helper";

export const GetCoupon=(data)=>{
    return myAxios.post('/getCoupon',data).then((response)=> response.data)
}
