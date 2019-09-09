<template>

    <v-navigation-drawer
      v-model="drawer"
      app
      right
     
    >
      <v-list-item>
       <announcement></announcement>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
       <v-btn color="green" rounded   class="mr-3" @click="navigate('newsletters')">News Letters</v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <drawerList></drawerList>

      <v-divider></v-divider>
      
    </v-navigation-drawer>
  
</template>

<script>
  import announcement from '~/components/Cards/Announcement.vue';

  import drawerList from '~/components/List/Drawer.vue';


  export default {
    name:'mobileDrawer',
    components:{
      announcement,
  
      drawerList
    },
    
    data () {
      return {
       
      }
    },

    computed:{

       drawer:{
        get(){
          return this.$store.getters.drawer;
        },
        set(val){
          this.$store.commit('drawer',val);
        }
        
       }
    },
    methods:{

     navigate(page){

        let route = "/"+page
       
        this.$router.push({path:route});
      }

    }
  }
</script>