<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="9">
        <v-autocomplete
          v-model="model"
          :items="items"
          :loading="isLoading"
          :search-input.sync="search"
          color="FIRed"
          hide-no-data
          hide-selected
          placeholder="Ingresa las palabras clave o el nombre del artículo"
          flat
          filled
          rounded
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" sm="10">
        <PaperCard/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaperCard from '../components/paperCard.vue'

export default {
  name: 'Papers',
  components: {
    PaperCard
  }
}
</script>

<style>

</style>
