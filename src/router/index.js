import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Callejon from "../views/Callejon.vue";
import Login from "../views/Login.vue";
import Registrar from "../views/Registrar.vue";
import Editar from "../views/Editar.vue";
import { getAuth } from "firebase/auth";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);








const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {}
    },
    {
        path: "/callejon",
        name: "Callejon",
        component: Callejon
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/registrar",
        name: "Registar",
        component: Registrar
    },
    {
        path: "/editar",
        name: "Editar",
        component: Editar
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const sesionActiva = getAuth().currentUser;
    console.log(sesionActiva);
    const rutaRestringida = to.meta.restringida;

    if (sesionActiva && rutaRestringida) {
        next();
    } else if (!sesionActiva && rutaRestringida) {
        next("/callejon");
    }

    next();
});

export default router;
