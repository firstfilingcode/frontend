import { myAxios } from "../services/Helper";

export const GetOrderSummary=(data)=>{
    return myAxios.post('/getServiceDetail',data).then((response)=> response.data)
}

export const OrderPurchased=(order)=>{
    return myAxios.post('/orderPurchased',order).then((response)=> response.data)
}