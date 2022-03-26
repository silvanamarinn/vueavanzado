import Vue from "vue";
import Vuex from "vuex";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogin: null
  },
  mutations: {
    SET_USER_LOGIN(state, payload) {
      state.userLogin = payload;
    }
  },
  actions: {
    async registrar_Usuario(context, usuario) {
      const { email, password } = usuario;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado con exito!");
    },
    async iniciarSesion(context, usuario) {
      const { email, password } = usuario;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    },
    getUserLogin(context) {
      const { commit } = context;
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          commit("SET_USER_LOGIN", user.email);
        }
      });
    },
    async deslogearse(context) {
      const { commit } = context;
      getAuth()
        .signOut()
        .then((response) => {
          alert("Deslogeado!");
          commit("SET_USER_LOGIN", null);
        });
    }
  }
});
