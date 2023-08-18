import { Error } from "../pages/Error";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login";
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
        path:'/login',
        component:Login
    },
    {
        path:'*',
        component:Error,
        layout:null
    },
]

export {publicRouters}
