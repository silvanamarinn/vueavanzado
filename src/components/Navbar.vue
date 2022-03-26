<template>
  <div>
    <b-navbar class="nav p-2" toggleable="lg" type="dark" variant="">
      <b-navbar-brand href="#">Curso AlfaWeb</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">Administracion</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/registrar">Registrar</b-nav-item>
          <b-nav-item to="/editar">Editar</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>

      <b-nav-item v-if="userLogin == null" to="/login" @click="login"> Inicie Sesion </b-nav-item>
      <span v-else>
        {{ userLogin }}
        <span @click="logout" v-b-tooltip.hover title="Exit"
          ><b-avatar icon="door-closed"> </b-avatar
        ></span>
      </span>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { getAuth } from "@firebase/auth";
export default {
  name: "Navbar",
  mounted() {
    this.getUserLogin();
  },
  methods: {
    ...mapActions(["getUserLogin", "deslogearse", "iniciarSesion"]),
    async logout() {
      await this.deslogearse();
      this.$router.push("/login");
    },
    async login() {
      const{email, password} = this.usuario
      await this.iniciarSesion({email, password});
        this.$router.push("/login");
    },
  },
  computed: {
    ...mapState(["userLogin"]),
  },
};
</script>

<style >
.nav {
  background-color: #563d7c;
}
span {
  color: #fff;
}
</style>