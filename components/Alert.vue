<template>
	<v-alert class="mt-5" v-model="alert.value" :type="alert.type" :dismissible="alert.dismiss">
      {{alert.message}}
    </v-alert>
</template>

<script type="text/javascript">

  export default {

    
    computed:{

      alert: function(){
          
          return this.$store.getters.alert;
        }
    },
   

  }

</script>
