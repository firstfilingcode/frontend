import { myAxios } from "../services/Helper";

export const PaymentStatus = (data) => {
    return myAxios.post('/orderPaymentStatus', data).then((response) => response.data)
}