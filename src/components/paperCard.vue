<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-hover v-slot:default="{ hover }">
          <v-card color="#f2f2f2" :class="`elevation-${hover ? 24 : 0}`" class="transition-swing">
            <v-row align="center" justify="center" class="ma-4 pa-4">
              <v-col cols="12" sm="8">
                <p class="caption font-weight-medium">2009</p>
                <h2>Polymeric nanomedicine for cancer MR imaging and drug delivery</h2>
                <p class="mt-1 body-2 font-weight-light">Chalermchai Khemtong, Chase W. Kessinger y Jinming Gao</p>
                <v-btn tile :class="`elevation-${hover ? 24 : 0}`" class="my-4 transition-swing" dark color="FIRed">Leer artículo</v-btn>
              </v-col>
              <v-col cols="12" sm="4">
                <div class="text-center">
                  <v-img :class="`elevation-${hover ? 24 : 0}`" class="transition-swing rounded-circle mx-auto" height="150" width="150" src="https://faculty.mdanderson.org/content/dam/mdanderson/images/publications/cancerwise/N/xNature_Nano_nBiPE_Art.JPG.resize.jpg.pagespeed.ic.rWAoFE5Lm-.jpg"></v-img>
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
