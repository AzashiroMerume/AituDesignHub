import { createRouter, createWebHistory } from "vue-router"
import { useUserStore } from '@/stores/UserStore'
import { useProjectStore } from '@/stores/ProjectStore'
import { loadLayoutMiddleware } from "./middlewares/loadLayoutMiddleware"
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
        component: Register,
        meta: {
            layout: 'auth'
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            layout: 'auth'
        }
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
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach(loadLayoutMiddleware)

router.beforeEach((to, from) => {
    const userStore = useUserStore()
    const projectStore = useProjectStore()

    userStore.validationErrors = null
    userStore.error = null
    projectStore.errors = null
    projectStore.validationErrors = null

    if ((to.name == 'Login' || to.name == 'Register') && userStore.isAuthenticated) {
        return { name: 'Home' }
    } else if ((to.name == 'MyProjects' || to.name == 'CreateProject') && !userStore.isAuthenticated) {
        return { name: 'Login' }
    }
})

export default router