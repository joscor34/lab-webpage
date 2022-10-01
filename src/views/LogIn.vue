<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-form>
					<v-alert
							v-if="error == true"
							dense
							outlined
							type="error"
						>
						La Contraseña o el usuario son incorrectos
					</v-alert>
          <v-container>
            <v-row justify="center">
              <v-col cols="12">
                 <v-text-field
                    v-model="email"
                    label="Correo"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Contraseña"
                    required
                  ></v-text-field>
                  <v-btn @click="login()" >Entrar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'LogIn',
  data: () => ({
    password: '',
    email: '',
    error: false
  }),
  methods: {
    ...mapMutations(['setUser', 'setToken']),
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

<style>

</style>
