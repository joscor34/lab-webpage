<template>
  <v-container>
    <v-row align="center" justify="center">
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
