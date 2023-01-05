import { templateSettings } from "lodash"
import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from '@/stores/UserStore'
import Home from "../views/Home.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import MyProjects from "../views/MyProjects.vue"
import CreateProject from "../views/CreateProject.vue"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/myprojects",
        name: "MyProjects",
        component: MyProjects
    },
    {
        path: "/create",
        name: "CreateProject",
        component: CreateProject
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach((to, from) => {
    const userStore = useUserStore()
    if ((to.name == 'Login' || to.name == 'Register') && userStore.isAuthenticated) {
        return { name: 'Home' }
    }
})

export default router