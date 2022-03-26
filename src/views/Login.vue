<template>
  <div>
    <h2 style="margin: 20px 0">Login Usuario</h2>
    <b-container class="bv-example-row">
      <div>
        <input class="m-2" placeholder="E-mail" v-model="usuario.email" />
        <input
          class="m-2"
          placeholder="Password"
          v-model="usuario.password"
          type="password"
        />
        <b-button class="m-3" variant="success" @click="login"
          >Iniciar</b-button
        >

        <b-button class="m-3" variant="danger">Limpiar Formulario</b-button>
        <b-button class="m-3" variant="warning">Limpiar Validación</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["iniciarSesion"]),
    async login() {
      const { email, password } = this.usuario;
      await this.iniciarSesion({ email, password });
      alert("Estas logeado!");
      this.$router.push("/");
      this.usuario.email = "";
      this.usuario.password = "";
    },
  },
};
</script>


<style>
</style>