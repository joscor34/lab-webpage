<template>

  <v-container>
    <v-row justify="center" v-if="cargando" align="center">
      <v-progress-circular
				:size="70"
				:width="7"
				color="FIRed"
				indeterminate
			></v-progress-circular>
    </v-row>
    <!-- ----------------- -->
    <div v-else>
      <v-row justify="center" align="start">
        <v-col cols="12" sm="10">
          <!-- AQUÍ VA EL TITULO -->
          <h1>{{ titulo }}</h1>
          <!-- COORDINADOR -->
          <h5>Coordinado por {{ coordinador }}</h5>
          <!-- FECHA Y HORA EN LA QUE SE SUBIÓ EL PROYECTO -->
          <div class="FIGray--text">
            <h6>Fecha de entrega: {{ submitted_time }} </h6>
            <h6>Última modificación: {{ last_update_time }}</h6>
          </div>
          <v-divider class="mb-2 mt-2"></v-divider>
        </v-col>
      </v-row>
      <v-row justify="center" align="start">
        <v-col cols="12" sm="7">
          <!-- AQUÍ VA EL ABSTRACT -->
         <p>{{ abstract }}</p>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card elevation="0" color="#edede9" shaped>
            <div class="pa-6 mb-4">
              <div class="text-overline FIRed--text">Palabras clave:</div>
              <div class="body-2">
               <span v-for="(palabra, idx) in keywords" :key="idx" >{{ palabra }}, </span>
              </div>
              <div class="text-overline FIRed--text mt-2">Autores:</div>
              <div v-for="(autor, idx) in authors" :key="'A' + idx" class="body-2">
                <p><strong>Nombre:</strong> {{ autor.colab_name }}<br>
                <strong>País:</strong> {{ autor.colab_country }}<br>
                <strong>Institución:</strong> {{autor.colab_affil }}</p>
                <v-divider class="mb-4"></v-divider>
              </div>
              <div class="body-2 mt-4">
                <v-icon color="FIRed">
                  mdi-paperclip
                </v-icon>
                <a class="FIRed--text" @click="downloadPdf" style="text-decoration: none;" target="_blank">Archivo</a>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import moment from 'moment'

export default {
  data: () => ({
    cargando: false,
    titulo: '',
    coordinador: '',
    submitted_time: '',
    last_update_time: '',
    abstract: '',
    keywords: null,
    authors: null,
    pdf: null
  }),
  created () {
    this.getProyectData()
  },
  methods: {
    getProyectData () {
      this.cargando = true
      console.log(this.$route.params.id)
      this.$store.dispatch('GET_SINGLE_PROYECT', {
        proyectId: this.$route.params.id
      }).then(success => {
        this.pdf = success.data.pdf
        this.authors = JSON.parse(success.data.authors[0])
        this.keywords = success.data.keywords[0].split(',')
        console.log(this.keywords)
        this.titulo = success.data.title
        this.coordinador = success.data.coordinador
        this.submitted_time = moment(success.data.submitted_time).locale('es').format('LLL')
        this.last_update_time = moment(success.data.last_update_time).locale('es').format('LLL')
        this.abstract = success.data.abstract
        this.cargando = false
      }).catch(error => {
        console.error(error)
        this.cargando = false
      })
    },
    downloadPdf () {
      const byteArray = new Uint8Array(this.pdf.data.data)
      console.log(byteArray)
      const blob = new Blob([byteArray], { type: 'application/pdf' })
      const blobURL = URL.createObjectURL(blob)
      window.open(blobURL)
    }
  }
}
</script>

<style>
/* .v-divider {
  border-color: rgb(182, 25, 33) !important;
} */
</style>
