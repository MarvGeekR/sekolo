<template>
  <v-form v-model="valid" ref="personForm">
                
    <v-text-field
      v-model="person.name.first"
      box
      label="First Name"
     
    ></v-text-field>

    <v-text-field
      v-model="person.name.last"
      box
      label="Surname"
     
    ></v-text-field>
      
  </v-form>

</template>

<script>

  export default {
    name: 'nameForm',
    components:{
      
    },
    
    data () {
      return {
          valid:false,
          

      }
    },
   
    computed:{
      

      person(){

        return this.$store.getters['person/details'];

      }

    },
   

  }
</script>
