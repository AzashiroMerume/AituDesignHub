import { createRouter, createWebHistory } from "vue-router";
import main from "../views/main.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: main,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;