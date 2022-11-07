const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // devServer:   {
  //   proxy: 'https://labwebapp.herokuapp.com'
  // },
  transpileDependencies: [
    'vuetify'
  ]
})
