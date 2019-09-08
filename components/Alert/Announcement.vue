<template>
  <div>

    <v-alert
      :value="true"
      type="info"
    >
      {{announcement}}
    </v-alert>

  </div>
</template>
<script>

  export default {
    name: 'announcementAlert',
    components:{

    },
    
    data () {
      return {
       
      }
    },

    computed:{

      announcement(){
        return this.$store.getters.announcement;
      }

     
    }

   

  }
</script>