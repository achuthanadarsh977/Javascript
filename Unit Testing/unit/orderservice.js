import paymentservice from "./paymentservice"




export function orderservice(order){
    paymentservice.charge(order.amount)
}

