<template>
  <v-container justify="center" align="center">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-16 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12 mb-10">
                    <h3 class="text-center FIGray--text">Ingresa a tu cuenta</h3>
                    <h5 class="text-center grey--text">Entra a tu cuenta para poder acceder a tus proyectos
                      <br>o administrarlos.
                    </h5>
                    <v-row justify="center" align="center">
                      <v-col cols="12" sm="8">
                        <v-form v-model="valid">
                          <v-text-field label="Correo" filled dense color="FIRed" class="mt-6" v-model="email" :rules="emailRules" required>
                          </v-text-field>
                          <v-text-field label="Contraseña" filled dense color="FIRed" class="mt-1" v-model="password" :rules="passwordRules" required>
                          </v-text-field>
                        </v-form>
                        <v-row>
                          <v-col cols="12" sm="12" class="mb-6">
                            <span class="caption FIRed--text">Olvidé mi contraseña</span>
                          </v-col>
                        </v-row>
                        <v-btn dark color="FIRed" block tile>Ingresar</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6" class="FIRed rounded-bl-xl">
                  <div style="text-align:center; padding:130px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center">¿Aún no tienes cuenta?</h3>
                      <h5 class="text-center">Vamos a preparar todo para que puedas comenzar a crear tu <br> cuenta personal</h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn outlined dark white tile v-on:click="signinRoute" class="mt-5">Registrate aquí</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LogIn',
  data: () => ({
    step: 1,
    password: '',
    email: '',
    error: false
  }),
  methods: {
    ...mapMutations(['setUser', 'setToken']),
    signinRoute () {
      this.$router.push('/signin').catch(() => {})
    },
    login () {
      this.$store.dispatch('LOGIN', {
        email: this.email,
        password: this.password
      }).then(success => {
        console.log(success)
        this.setUser(this.email)
        this.setToken(success)
        this.$router.push('/')
        this.$router.go()
      }).catch(error => {
        console.log(error)
        this.error = true
      })
    }
  }
}
</script>

<style scoped>
  .v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
  }
  .v-application .rounded-b-xl {
    border-bottom-right-radius: 300px !important;
  }
</style>
