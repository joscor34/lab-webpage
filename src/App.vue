<template>
  <v-app>
    <!-- Tamaño SM > -->
    <div class="d-none d-sm-flex mb-16">
      <div class="mb-2">
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
          <v-menu
            left
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <h2 v-if="logged == true" class="text-h5 FIGray--text font-weight-bold">Hola, <a class="text-h5  FIRed--text font-weight-medium" v-bind="attrs" v-on="on">{{Username}}</a></h2>
            </template>
            <v-list>
              <v-list-item
                @click="logOut"
              >
                <v-list-item-title>Log out</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="uploadProyect"
              >
                <v-list-item-title>Subir proyecto</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
                <v-btn text large color="#B61922" @click="papersRoute">Articulos</v-btn>
                <v-btn text large color="#B61922">Proyectos</v-btn>
                <v-btn text large color="#B61922">Miembros</v-btn>
                <v-btn v-if="admin === true" @click="adminRoute" text large color="#B61922">Panel</v-btn>
              </v-row>
            </v-container>
          </template>
        </v-app-bar>
      </div>
    </div>

    <!-- Tamaño xs -->
    <div class="d-flex d-sm-none">
      <v-app-bar
        app
        color="white"
        dense
        fixed
        elevation="0"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="FIRed"></v-app-bar-nav-icon>
        <div class="align-center" v-on:click="homeRoute">
          <v-img
            alt="Lab Logo"
            class="shrink mr-2"
            contain
            src="@/assets/laboratorioLogoV2.svg"
            transition="scale-transition"
            width="205"
          />
        </div>
        <v-spacer></v-spacer>
      </v-app-bar>
    </div>
    <div class="d-flex d-sm-none">
      <v-navigation-drawer
        v-model="drawer"
        absolute
        dense
        app
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-img
            alt="Lab Logo"
            class="shrink mr-2"
            contain
            src="@/assets/laboratorioLogoV2.svg"
            transition="scale-transition"
            width="205"
            v-if="logged == false"
          />
          <div v-if="logged == true">
            Hola, <a class="FIRed--text font-weight-medium">{{Username}}</a>
            <v-divider class="mt-1"></v-divider>
          </div>
          <v-list-item-group
            active-class="FIRed--text text--FIRed"
          >
            <v-list-item>
              <v-icon class="mr-2">
                mdi-calendar
              </v-icon>
              <v-list-item-title>Eventos</v-list-item-title>
            </v-list-item>

            <v-list-item @click="papersRoute">
              <v-icon class="mr-2">
                mdi-note-multiple
              </v-icon>
              <v-list-item-title>Artículos</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-icon class="mr-2">
                mdi-hammer-screwdriver
              </v-icon>
              <v-list-item-title>Proyectos</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-icon class="mr-2">
                mdi-account-group
              </v-icon>
              <v-list-item-title>Miembros</v-list-item-title>
            </v-list-item>
            <v-list-item @click="adminRoute" v-if="admin == true">
              <v-icon class="mr-2">
                mdi-shield-crown
              </v-icon>
              <v-list-item-title>Panel</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-divider></v-divider>
        <div class="pa-2 mt-2">
          <v-btn v-if="logged == false" color="#B61922" dark elevation="0" v-on:click="loginRoute" block>
          Iniciar Sesión
        </v-btn>
        <v-btn v-if="logged == false" text color="#B61922" v-on:click="signinRoute" block>
          Registrarse
        </v-btn>
        <v-btn v-if="logged == true" text color="#B61922" v-on:click="logOut" block>
          <v-icon>
            mdi-logout
          </v-icon>
          Cerrar sesión
        </v-btn>
        </div>
      </v-navigation-drawer>
    </div>

    <v-main class="pt-16 pt-xs-16">
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
    token: '',
    admin: false,
    drawer: false
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
        if (decodeToken.userType === 1) {
          this.Username = decodeToken.name
          this.logged = true
          this.admin = true
        } else {
          this.Username = decodeToken.name
          this.logged = true
          this.admin = false
        }
      }
    },
    logOut () {
      this.$cookies.remove('token')
      this.$router.push('/')
      this.$router.go()
    },
    loginRoute () {
      this.$router.push('/login').catch(() => {})
    },
    uploadProyect () {
      this.$router.push('/project-submission').catch(() => {})
    },
    signinRoute () {
      this.$router.push('/signin').catch(() => {})
    },
    homeRoute () {
      this.$router.push('/').catch(() => {})
    },
    adminRoute () {
      this.$router.push('/admin-panel').catch(() => {})
    },
    papersRoute () {
      this.$router.push('/articulos').catch(() => {})
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
