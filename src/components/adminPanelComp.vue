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
		<p v-else v-for="(proyecto, idx) in proyectos" :key="idx">{{idx}}: {{proyecto.title}} - {{proyecto.abstract}}</p>
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
    }
  }
}
</script>

<style>

</style>
