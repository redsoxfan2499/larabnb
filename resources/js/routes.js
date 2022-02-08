import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
import BookableListItem from "./bookables/BookableListItem";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/second",
        component: BookableListItem,
        name: "second"
    }
];

const router = new VueRouter({
    routes: routes,
    mode: "history"
});

export default router;
