<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-form v-model="valid">
          <v-container>
            <v-row justify="center">
              <v-col cols="12">
                 <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Correo"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="password"
                    label="Contraseña"
                    required
                  ></v-text-field>
                  <v-btn>Entrar</v-btn>
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
  name: 'LogIn'

}
</script>

<style>

</style>
