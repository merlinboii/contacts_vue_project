
import { createRouter, createWebHistory } from 'vue-router' 
// import vue-router ,createWebHistory are log that saved data of user view in web

import Users from "../views/Users.vue"
import About from "../views/About.vue"
import AddUser from "../views/AddUser.vue"

const routerHistory = createWebHistory()

const routes = [
    {
        path:'/',
        redirect:'/users'
    },
    {
        path:'/users',
        name: Users,
        component: Users
    },
    {
        path:'/about',
        name: About,
        component: About
    },
    {
        path:'/adduser',
        name: AddUser,
        component: AddUser
    }
]

const router = createRouter({
    history: routerHistory,
    routes
})

export default router