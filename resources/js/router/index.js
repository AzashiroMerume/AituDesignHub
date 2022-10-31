import { templateSettings } from "lodash";
import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Teams from "../views/Teams.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/teams",
        name: "Teams",
        component: Teams,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;