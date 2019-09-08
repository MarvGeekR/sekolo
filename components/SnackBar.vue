<template>
    <v-snackbar
      v-model="snackbar.value"
      :timeout="timeout"
      :multi-line="'multi-line'"
      :color="snackbar.type"
    >
      {{ snackbar.message }}

      <v-btn
        dark
        flat
        @click="close"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>

  

  export default {
    

    data() {
      return {
       
       timeout:40000
        
        
      }
    },
    computed:{

      snackbar(){
          return this.$store.getters.snackBar;
        }
    },

    methods:{

      close(){

          this.$store.commit('snackBar',{
                  value:false,
                  message:'',
                  type:'error'
              })

      }
    }
  }

</script>