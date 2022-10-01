<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dense
      fixed
      hide-on-scroll
    >
      <div class="d-flex align-center">
        <v-img
          alt="Lab Logo"
          class="shrink mr-2"
          contain
          src="@/assets/laboratorioLogo.svg"
          transition="scale-transition"
          width="40"
        />

        <h1 style="color:#333333;">Laboratorio</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn text color="#B61922">
        Registrarse
      </v-btn>
      <v-btn color="#B61922" dark elevation="0" v-on:click="loginRoute">
        Iniciar sesión
      </v-btn>
      <!-- <v-btn icon color="#B61922">
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <template v-slot:extension>
        <v-container>
          <v-row justify="center">
            <v-btn text large color="#B61922">Eventos</v-btn>
            <v-btn text large color="#B61922">Articulos</v-btn>
            <v-btn text large color="#B61922">Miembros</v-btn>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {

  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    loginRoute () {
      this.$router.push('/login')
    }
  }
}
</script>
