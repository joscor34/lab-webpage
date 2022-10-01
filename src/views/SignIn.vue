<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="4">
        <v-form v-model="valid">
          <v-container>
            <v-row justify="center">
              <v-col cols="12">
                 <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nombre"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="lastName"
                    :rules="lastNameRules"
                    label="Apellidos"
                    required
                  ></v-text-field>
                 <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Correo"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="phoneNumber"
                    :rules="phoneNumberRules"
                    label="Número de teléfono"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="pwd"
                    :rules="pwdRules"
                    label="Contraseña"
                    required
                  ></v-text-field>
                  <v-btn>Registrarse</v-btn>
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
  name: 'SignIn'
}
</script>

<style>

</style>
