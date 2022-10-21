import { templateSettings } from "lodash";
import { createRouter, createWebHistory } from "vue-router";
import main from "../views/main.vue";
import teams from "../views/teams.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: main,
    },
    {
        path: "/teams",
        name: "teams",
        component: teams,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;