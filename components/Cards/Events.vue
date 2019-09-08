<template>
	<v-card >
    <v-container>
    
      <v-divider></v-divider>
      <calendar></calendar>
    </v-container>

  </v-card>
 
</template>
<script>
  
  import calendar from '~/components/Calendar/Events.vue';
  
  export default {
    name: 'eventsCard',
    components:{
      calendar,
      
    },
    data () {
      return {

        progress:false
      }
    },

    computed:{
      
      user(){
        
       

      }
    },

    methods: {

    async login(){
        
    },
   
   }

  }
</script>