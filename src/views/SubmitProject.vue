<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" class="mt-4">
        <h1 class="text-center FIRed--text mb-6">Sube tu proyecto</h1>
        <v-card outlined class="mt-8 mb-8">
          <v-row justify="center" align="center" class="ml-4 mr-4 mt-3 mb-4">
            <v-col cols="12">
              <div class="text-overline mb-8 FIGray--text">Rellena los siguientes espacios</div>
              <v-text-field
                label="Título del proyecto"
                placeholder="Ingresa el título de tu proyecto"
                filled
                rounded
                dense
                color="FIRed"
              ></v-text-field>
              <v-card outlined class="mt-0 mb-6">
                <v-row justify="center" align="center" class="ml-4 mr-4 mt-3 mb-8">
                  <v-col cols="12">
                    <div class="text-overline mb-8 FIGray--text">Anota los datos de los colaboladores</div>
                    <div v-for="colaborador in colaboradores" :key="colaborador" class="mb-4">
                      <v-card outlined>
                        <v-row justify="center" align="center" class="ml-4 mr-4 mt-0 mb-0">
                          <v-col cols="12">
                            <v-row>
                              <v-col cols="11">
                                <div class="text-overline mb-4 FIRed--text">Colaborador {{ colaborador }}</div>
                              </v-col>
                              <v-col cols="1">
                                <v-btn color="FIRed" icon v-if="colaborador > 1" @click="removeColab">
                                  <v-icon>
                                    mdi-close
                                  </v-icon>
                                </v-btn>
                              </v-col>
                            </v-row>
                            <v-text-field
                              label="Nombre completo"
                              placeholder="Ingresa el nombre completo (iniciando por nombre"
                              filled
                              rounded
                              dense
                              color="FIRed"
                            ></v-text-field>
                            <v-text-field
                              label="País de nacimiento"
                              placeholder="Ingresa el país de nacimiento"
                              filled
                              rounded
                              dense
                              color="FIRed"
                            ></v-text-field>
                            <v-text-field
                              label="Institución"
                              placeholder="Institución a la que está afiliadx"
                              filled
                              rounded
                              dense
                              color="FIRed"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-card>
                    </div>
                    <v-btn text color="FIRed" class="d-none d-sm-flex" @click="addColab">
                      <v-icon left>
                        mdi-account-multiple-plus
                      </v-icon>
                      Agregar colaborador
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
              <v-text-field
                label="Coordinador"
                placeholder="Ingresa el nombre del coodinador del proyecto"
                filled
                rounded
                dense
                color="FIRed"
              ></v-text-field>
              <v-textarea
                filled
                rounded
                placeholder="Aquí va el resumen (abstract) del proyecto"
                name="input-7-4"
                label="Resumen"
                color="FIRed"
              ></v-textarea>
              <v-text-field
                label="Palabras clave"
                placeholder="Ingresalas separandolas por comillas (Ej. Medicina, nanoparticulas, polimeros)"
                filled
                rounded
                dense
                chips
                color="FIRed"
              ></v-text-field>
              <v-file-input
                show-size
                chips
                rounded
                placeholder="Sube el archivo de tu proyecto (.pdf)"
                filled
                accept=".pdf"
                color="FIRed"
              ></v-file-input>
            </v-col>
            <v-col cols="12" class="text-right">
              <v-btn text color="secondary">Cancelar</v-btn>
              <v-btn color="FIRed" text>Subir</v-btn>
            </v-col>
          </v-row>
          <!-- <div class="text-right">
            <v-btn text color="secondary">Cancelar</v-btn>
            <v-btn color="FIRed" text>Subir</v-btn>
          </div> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SubmitProject',
  data: () => ({
    colaboradores: 1
  }),
  methods: {
    addColab () {
      this.colaboradores += 1
      console.log(this.colaboradores)
    },
    removeColab () {
      this.colaboradores -= 1
      console.log(this.colaboradores)
    }
  }
}
</script>

<style>

</style>
