<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" class="mt-10 d-none d-sm-flex">
        <v-img
          alt="Error 404: Pagina no encontrada"
          class="shrink"
          contain
          src="@/assets/error404Pop.svg"
          transition="scale-transition"
          height="450"
          >
        </v-img>
      </v-col>
      <v-col cols="12" class="d-flex d-sm-none">
        <v-img
          alt="Error 404: Pagina no encontrada"
          class="shrink mr-2"
          contain
          src="@/assets/error404Pop.svg"
          transition="scale-transition"
          height="450"
          >
        </v-img>
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn
        text
        color="FIRed"
        v-on:click="homeRoute"
        >
        <v-icon>mdi-arrow-left</v-icon>
        Regresar al inicio
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    homeRoute () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style>

</style>
