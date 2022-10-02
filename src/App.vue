<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dense
      fixed
      elevation="0"
      hide-on-scroll
    >
      <div class="d-flex align-center" v-on:click="homeRoute">
        <v-img
          alt="Lab Logo"
          class="shrink mr-2"
          contain
          src="@/assets/laboratorioLogoV2.svg"
          transition="scale-transition"
          width="205"
        />

        <!-- <h1 style="color:#333333;">Laboratorio</h1> -->
      </div>

      <v-spacer></v-spacer>
			<h3 v-if="logged == true">Hola, {{Username}}</h3>
      <v-btn v-if="logged == false" text color="#B61922" v-on:click="signinRoute">
        Registrarse
      </v-btn>
      <v-btn v-if="logged == false" color="#B61922" dark elevation="0" v-on:click="loginRoute">
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
            <v-btn text large color="#B61922">Proyectos</v-btn>
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
import jwtDecode from 'jwt-decode'
export default {
  name: 'App',

  data: () => ({
    logged: false,
    Username: '',
    token: ''
  }),
  beforeMount () {
    this.checkLog()
    console.log(`BeforeMount token: ${this.token}`)
  },
  methods: {
    checkLog () {
      if (!this.$cookies.get('token')) {
        this.logged = false
      } else {
        this.token = this.$cookies.get('token')
        const decodeToken = jwtDecode(this.token)
        this.Username = decodeToken.name
        this.logged = true
      }
    },
    loginRoute () {
      this.$router.push('/login').catch(() => {})
    },
    signinRoute () {
      this.$router.push('/signin').catch(() => {})
    },
    homeRoute () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>x
