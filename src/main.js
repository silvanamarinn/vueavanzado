import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const firebaseConfig = {
  apiKey: "AIzaSyDFNhJcgyLFYZxion_eTgWceaXvYkhV70U",
  authDomain: "prueba-45a3f.firebaseapp.com",
  projectId: "prueba-45a3f",
  storageBucket: "prueba-45a3f.appspot.com",
  messagingSenderId: "718446606799",
  appId: "1:718446606799:web:4f32d71bcdaac8a69e7aba"
};

initializeApp(firebaseConfig);


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");