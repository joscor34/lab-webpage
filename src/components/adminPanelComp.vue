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
      <v-col>
        <v-btn v-for="(proyecto, idx) in proyectos" :key="idx" @click="proyectoRoute(proyecto._id)" >{{idx}}: {{proyecto.title}} - {{proyecto.abstract}}</v-btn>
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
