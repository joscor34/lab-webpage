<template>
	<v-container>
		<v-row justify="center" align="center" v-if="carga">
			<v-progress-circular
				:size="70"
				:width="7"
				color="FIRed"
				indeterminate
			></v-progress-circular>
		</v-row>
    <v-row v-else justify="center" align="center">
      <v-col cols="12" sm="10">
        <h1 class="FIRed--text text-center mb-6">Administración de proyectos</h1>
        <v-expansion-panels popout multiple>
          <v-expansion-panel
            v-for="(proyecto, idx) in proyectos"
            :key="idx">
            <v-expansion-panel-header class="subtitle-1" disable-icon-rotate>
              {{proyecto.title}}
              <template v-slot:actions>
                <v-icon color="FIRed">
                  mdi-chevron-down
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="body-2 font-weight-light">
              <div class="text-overline FIGray--text">Resumen:</div>
              {{proyecto.abstract}}
              <v-row justify="right" align="end">
                <v-col cols="12" class="text-right">
                  <v-btn color="FIRed" text @click="proyectoRoute(proyecto._id)">
                    <v-icon class="mr-1">
                      mdi-message-draw
                    </v-icon>
                    Revisar
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- <v-btn v-for="(proyecto, idx) in proyectos" :key="idx" @click="proyectoRoute(proyecto._id)" >{{idx}}: {{proyecto.title}} - {{proyecto.abstract}}</v-btn> -->
      </v-col>
    </v-row>
	</v-container>
</template>

<script>
export default {
  data: () => ({
    proyectos: [],
    error: '',
    carga: false
  }),
  created () {
    this.carga = true
    this.getProyects()
  },
  methods: {
    getProyects () {
      this.$store.dispatch('GET_PROYECTS').then(success => {
        this.proyectos = success.data
        this.carga = false
      }).catch(err => {
        this.error = err
        this.carga = false
      })
    },
    proyectoRoute (params) {
      this.$router.push({ name: 'proyecto', params: { id: params } })
    }

  }
}
</script>

<style>

</style>
