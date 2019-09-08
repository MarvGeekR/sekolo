<template>
 
  <v-form v-model="valid" ref="userForm">
    
   <v-layout column wrap>

    <v-text-field
      label="Reference Number"
      :rules="ref"
      v-model='user.refNumber'
      >
    ></v-text-field>


  </v-layout>
  </v-form>
</template>
<script>
 
  export default {
    name: 'userForm',
    
    props: {




      password: {
        type: Boolean,
        default: false
      },

      userName: {
        type: Boolean,
        default: false
      },

     
      confirmPassword: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {

        valid: false,
        passwordCorrect: '',
        passwordMatch: false,
        passwordRules: [
          (v) => !!v || 'Password is required',
  
        ],
        ref: [
          (v) => !!v || 'Reference number is required',
  
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
        
        
      }
    },

    computed: {

      user: function(){

        return this.$store.getters['user/details'];

      },

     
    }

    


  }
</script>