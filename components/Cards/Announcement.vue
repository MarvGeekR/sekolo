<template>
  <div>
    <v-divider></v-divider>
    <announcement></announcement>
  </div>
 
</template>
<script>
  
  import announcement from '~/components/Alert/Announcement.vue';
  
  export default {
    name: 'annoucementCard',
    components:{
      announcement,
      
    },
    data () {
      return {

       
      }
    },

    computed:{
      
    },

    methods: {

   
   }

  }
</script>