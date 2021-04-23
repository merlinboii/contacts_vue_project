
import { createRouter, createWebHistory } from 'vue-router' 
// import vue-router ,createWebHistory are log that saved data of user view in web

import Contacts from "../views/Contacts.vue"
import About from "../views/About.vue"
import AddContact from "../views/AddContact.vue"
import UpdateContact from "../views/UpdateContact.vue"
import Login from "../views/Login.vue"
// import SignUp from "../views/SignUp.vue"

const routerHistory = createWebHistory()

const routes = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path:'/login',
        name: Login,
        component: Login
    },
    {
        path:'/contacts',
        name: Contacts,
        component: Contacts
    },
    {
        path:'/about',
        name: About,
        component: About
    },
    {
        path:'/addcontact',
        name: AddContact,
        component: AddContact
    },
    {
        path:'/updatecontact/:userId',
        name: 'UpdateContact',
        component: UpdateContact
    },
    {
        path:'/:catchAll(.*)',
        redirect:'/login'
    }
]

const router = createRouter({
    history: routerHistory,
    routes
})

export default router