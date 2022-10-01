<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-form>
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
export default {
  name: 'LogIn',
  data: () => ({
    password: '',
    email: '',
    error: false
  }),
  methods: {
    login () {
      this.$store.dispatch('LOGIN', {
        email: this.email,
        password: this.password
      }).then(success => {
        console.log(success)
        this.$router.push('/')
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
