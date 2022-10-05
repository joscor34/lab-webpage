<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" class="mt-4">
        <h1 class="text-center FIRed--text mb-6">Sube tu proyecto</h1>
        <v-card outlined class="mt-8 mb-8">
          <validation-observer ref="observer">
            <form @subirArchivo.prevent="subirArchivo">
              <v-row justify="center" align="center" class="ml-4 mr-4 mt-3 mb-4">
                <v-col cols="12">
                  <div class="text-overline mb-8 FIGray--text">Rellena los siguientes espacios</div>
                  <validation-provider rules="required">
                    <v-text-field
                      label="Título del proyecto"
                      placeholder="Ingresa el título de tu proyecto"
                      filled
                      rounded
                      dense
                      v-model="proyectTitle"
                      color="FIRed"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <v-card outlined class="mt-0 mb-6">
                    <v-row justify="center" align="center" class="ml-4 mr-4 mt-3 mb-8">
                      <v-col cols="12">
                        <div class="text-overline mb-8 FIGray--text">Anota los datos de los colaboladores</div>
                        <div v-for="(colaborador, idx) in colaboradores" :key="idx" class="mb-4">
                          <v-card outlined>
                            <v-row justify="center" align="center" class="ml-4 mr-4 mt-0 mb-0">
                              <v-col cols="12">
                                <v-row>
                                  <v-col cols="11">
                                    <div class="text-overline mb-4 FIRed--text ">Colaborador {{ colaborador }}</div>
                                  </v-col>
                                  <v-col cols="1">
                                    <v-btn color="FIRed" icon v-if="colaborador > 1" @click="removeColab">
                                      <v-icon>
                                        mdi-close
                                      </v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                                <validation-provider rules="required">
                                  <v-text-field
                                    v-model="colabs[idx].colab_name"
                                    label="Nombre completo"
                                    placeholder="Ingresa el nombre completo (iniciando por nombre"
                                    filled
                                    rounded
                                    dense
                                    color="FIRed"
                                    required
                                  ></v-text-field>
                                </validation-provider>
                                <validation-provider rules="required">
                                  <v-text-field
                                    v-model="colabs[idx].colab_country"
                                    label="País de nacimiento"
                                    placeholder="Ingresa el país de nacimiento"
                                    filled
                                    rounded
                                    dense
                                    color="FIRed"
                                    required
                                  ></v-text-field>
                                </validation-provider>
                                <validation-provide rules="required">
                                  <v-text-field
                                    v-model="colabs[idx].colab_affil"
                                    label="Institución"
                                    placeholder="Institución a la que está afiliadx"
                                    filled
                                    rounded
                                    dense
                                    color="FIRed"
                                    required
                                  ></v-text-field>
                                </validation-provide>
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
                        <v-btn text color="FIRed" class="d-flex d-sm-none center" @click="addColab">
                          <v-icon left>
                            mdi-account-multiple-plus
                          </v-icon>
                          Agregar <br> colaborador
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                  <validation-provider rules="required">
                    <v-text-field
                      v-model="coordinador"
                      label="Coordinador"
                      placeholder="Ingresa el nombre del coodinador del proyecto"
                      filled
                      rounded
                      dense
                      color="FIRed"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider rules="required">
                    <v-textarea
                      v-model="abstract"
                      filled
                      rounded
                      placeholder="Aquí va el resumen (abstract) del proyecto"
                      name="input-7-4"
                      label="Resumen"
                      color="FIRed"
                      required
                    ></v-textarea>
                  </validation-provider>
                  <validation-provider rules="required">
                    <v-text-field
                      v-model="keywords"
                      label="Palabras clave"
                      placeholder="Ingresalas separandolas por comillas (Ej. Medicina, nanoparticulas, polimeros)"
                      filled
                      rounded
                      dense
                      chips
                      color="FIRed"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider>
                    <v-file-input
                      :rules="rules"
                      v-model="file"
                      show-size
                      chips
                      rounded
                      placeholder="Sube el archivo de tu proyecto (.pdf)"
                      filled
                      accept=".pdf"
                      color="FIRed"
                      required
                    ></v-file-input>
                  </validation-provider>
                </v-col>
                <v-col cols="12" class="text-right">
                  <v-btn text color="secondary">Cancelar</v-btn>
                  <v-btn @click="subirArchivo" color="FIRed" text type="subirArchivo" :disabled="invalid">Subir</v-btn>
                </v-col>
              </v-row>
            </form>
          </validation-observer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import jwtDecode from 'jwt-decode'
import { ValidationProvider, extend, ValidationObserver, setInteractionMode } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

export default {
  name: 'SubmitProject',
  data: () => ({
    abstract: null,
    proyectTitle: null,
    coordinador: null,
    keywords: '',
    token: '',
    colaboradores: 1,
    colabs: [{}],
    file: null,
    rules: [
      v => !!v || 'Tienes que subir un archivo',
      v => (v && v.length > 0) || 'Tienes que subir un archivo'
    ]
  }),
  methods: {
    subirArchivo () {
      this.token = this.$cookies.get('token')
      const decodeToken = jwtDecode(this.token)
      this.keywords = this.keywords.toLowerCase().split(',').map(element => element.trim())
      console.log(this.colabs)
      this.$store.dispatch('UPLOAD_FILE', {
        userId: decodeToken.sub,
        title: this.proyectTitle,
        coordinador: this.coordinador,
        keywords: this.keywords,
        abstract: this.abstract,
        authors: this.colabs,
        proyecto: this.file
      }).then(success => {
        console.log(success)
      }).catch(error => {
        console.log(error)
      })
      this.$refs.observer.validate()
    },
    addColab () {
      const colaborador = {}
      this.colabs.push(colaborador)
      this.colaboradores += 1
    },
    removeColab () {
      this.colabs.pop()
      this.colaboradores -= 1
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  }
}

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'Tienes que rellenar este espacio'
})
</script>

<style>

</style>
