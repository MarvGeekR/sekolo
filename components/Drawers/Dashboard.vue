<template>
   <v-navigation-drawer
      clipped
      fixed
      v-model="openDrawer"
      app
    >
      <drawerList></drawerList>
  </v-navigation-drawer>
</template>
<script>
  import drawerList from '~/components/List/Drawer.vue';
  export default {
    name: 'dashboardDrawer',
    components:{
      drawerList
    },
    
    data () {
      return {
          
        }
    },
   
    computed:{

      openDrawer:{
        get(){
          return this.$store.getters.drawer;
        },
        set(val){
          this.$store.commit('drawer',val);
        }
      }
    }


  }
</script>