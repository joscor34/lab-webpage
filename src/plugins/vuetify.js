import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        FIRed: '#B61922',
        FIGray: '#595959',
        babyFIGray: '#D1D2D4',
        popPink: '#E73567',
        sunnyYellow: '#F9B956'
      },
      dark: {
        FIRed: '#B61922',
        FIGray: '#595959',
        babyFIGray: '#D1D2D4',
        popPink: '#E73567',
        sunnyYellow: '#F9B956'
      }
    }
  }
})
