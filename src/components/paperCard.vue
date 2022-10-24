<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card color="#f2f2f2" :elevation="hover ? 16 : 0">
            <v-row align="center" justify="center" class="ma-4 pa-4">
              <v-col cols="12" sm="8">
                <h2>Polymeric nanomedicine for cancer MR imaging and drug delivery</h2>
                <v-btn tile class="my-4" elevation="0" dark color="FIRed">Leer artículo</v-btn>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="text-center">
                  <v-img class="rounded-circle mx-auto" height="150" width="150" src="https://www.gameshub.com/wp-content/uploads/sites/5/2022/03/bella-goth-sims-2-disappearance.jpg"></v-img>
                  <h3 class="mt-2">Dra. Bella Goth</h3>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PaperCard'
}
</script>

<style>

</style>
