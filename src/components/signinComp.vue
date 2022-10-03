<template>
  <v-container justify="center" align="center">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-16 mt-10 FIRed">
          <v-window>
            <v-window-item>
              <v-row>
                <v-col cols="12" sm="6" class="white rounded-br-xl elevation-16">
                  <div style="text-align:center; padding:180px 0;">
                    <v-card-text class="FIRed--text">
                      <h3 class="text-center">¿Ya tenias una cuenta?</h3>
                      <h5 class="text-center">Ingresa a tu cuenta para que puedas seguir administrando<br>tus proyectos.</h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn outlined color="FIRed" tile v-on:click="loginRoute" class="mt-5">Ingresa aquí</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="mt-12 mb-10">
                    <v-alert
                      text
                      type="error"
                      class="ml-8 mr-8"
                      color="white"
											v-if="error == true"
                    >
                      Esta cuenta ya <strong>existe</strong>.
                    </v-alert>
										<v-alert
                      text
                      type="error"
                      class="ml-8 mr-8"
                      color="white"
											v-if="error2 == true"
                    >
                      Ocurrió un <strong>problema	</strong>.
                    </v-alert>
                    <h3 class="text-center white--text">Regístrate</h3>
                    <h5 class="text-center white--text">Crea tu cuenta para poder compartir tus proyectos
                      <br>o administrarlos.
                    </h5>
                    <v-row justify="center" align="center">
                      <v-col cols="12" sm="8">
                        <v-row class="mt-5">
                          <v-col cols="12" sm="6">
                            <v-text-field label="Nombre" :rules="[rules.required]" filled dense color="white" dark v-model="firstName">
                            </v-text-field>
                          </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field label="Apellidos" :rules="[rules.required]" filled dense color="white" dark v-model="lastName">
                            </v-text-field>
                          </v-col>
                        </v-row>
                        <v-text-field label="Correo" filled dense color="white" dark v-model="email">
                        </v-text-field>
                        <v-text-field class="inputPrice" label="Número de teléfono" type="number" :rules="[rules.required]" filled dense dark color="white"
                        v-model.number="phoneNumber">
                        </v-text-field>
                        <v-text-field label="Contraseña" :rules="[rules.required]" filled dense color="white" dark
                        v-model="password">
                        </v-text-field>
                        <v-btn class="FIRed--text" @click="register()" color="white" block tile>Registrarme</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
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

export default {
  name: 'SignInComp',
  data: () => ({
    error: false,
    error2: false,
    email: '',
    password: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    rules: {
      required: value => !!value || 'Se requiere este campo.',
      min: v => v.length >= 8 || 'Min 8 characters'
    }
  }),
  methods: {
    register () {
      this.$store.dispatch('REGISTER', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber
      }).then(success => {
        console.log(success)
        this.error = false
        this.error2 = false
        this.loginRoute()
      }).catch(err => {
        if (err === 500) {
          this.error2 = true
          this.error = false
        } else {
          this.error2 = false
          this.error = true
        }
      })
    },
    loginRoute () {
      this.$router.push('/login').catch(() => {})
    }
  }
}
</script>

<style scoped>
	.inputPrice >>> input[type="number"] {
		-moz-appearance: textfield;
	}
	.inputPrice >>> input::-webkit-outer-spin-button,
	.inputPrice >>> input::-webkit-inner-spin-button {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}
  .v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
  }
  .v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
  }
</style>
