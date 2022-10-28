<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10">
        <v-card elevation="20">
          <v-carousel delimiter-icon="mdi-circle-outline">
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition">
              <v-sheet class="pa-4">
                <h1>hola</h1>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'HomeView',
  data: () => ({
    items: [
      {
        src: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2125&q=80'
      },
      {
        src: 'https://images.unsplash.com/photo-1579165466991-467135ad3110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      },
      {
        src: 'https://images.unsplash.com/photo-1582560486643-d51a9722b92d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
      },
      {
        src: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80'
      },
      {
        src: 'https://images.unsplash.com/photo-1579154204449-47c454770447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
      }
    ]
  })
}
</script>
