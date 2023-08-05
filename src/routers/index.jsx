import { Error } from "../pages/Error";
import { Home } from "../pages/Home/Home";
import { Order } from "../pages/Order/Order";

const publicRouters = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/order',
        component:Order
    },
    {
        path:'*',
        component:Error,
        layout:null
    },
]

export {publicRouters}
