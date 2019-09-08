<template>
  <v-navigation-drawer
    :mini-variant="miniVariant"
    :clipped="clipped"
    v-model="drawer"
    fixed
    app
  >

  </v-navigation-drawer>
</template>
<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false
      }
    }
  }
</script>