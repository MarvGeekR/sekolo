<template>
	<div>
	
	 <v-container>
	 <v-app-bar
	 	
        color="green"
        height="110"
        class="mb-15"
        fixed="fixed"
        app
      >

      	<v-avatar
            :tile="false"
            :size="100"
           
            class="mr-2"
          >
           <img :src="logo" alt="school Logo">
          </v-avatar>
      	 <v-toolbar-title>{{school.name}}</v-toolbar-title>
      	 <div class="flex-grow-1"></div>
	    
	     <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
       
      </v-app-bar>
  
 	</v-container>
  </div>
</template>

<script>

  
  
  

  export default {
    name: 'indexLayout',
    components:{
     
     
      

    },

    data() {
      return {
        fixed:true
      }
    },
    computed:{

      drawer:{

        get(){
          return this.$store.getters.drawer
        },
        set(val){
          this.$store.commit('drawer',val)
        }
      },


      logo(){

        return this.$store.getters.logo;
      },

      school(){

        return this.$store.getters.school;
      }

      

    },

    methods:{
     
     
    }
  }
</script>
