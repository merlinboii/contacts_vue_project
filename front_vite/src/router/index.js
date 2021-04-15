
import { createRouter, createWebHistory } from 'vue-router' 
// import vue-router ,createWebHistory are log that saved data of user view in web

import Contacts from "../views/Contacts.vue"
import About from "../views/About.vue"
import AddContact from "../views/AddContact.vue"

const routerHistory = createWebHistory()

const routes = [
    {
        path:'/',
        redirect:'/contacts'
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
    }
]

const router = createRouter({
    history: routerHistory,
    routes
})

export default router