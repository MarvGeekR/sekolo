<template>
  <v-form v-model="valid" ref="contactForm">
    <v-text-field
      v-model="contact.email1"
      box
      label="Email"
      :rules="emailRules"
    ></v-text-field>
    <v-text-field
      v-model="contact.mobileNumber1"
      box
      label="Mobile Number"
      :rules="mobileRules"
    ></v-text-field>

  </v-form>

</template>

<script>

 

  export default {
    name: 'contactForm',
    components:{
      
    },
    
    data () {
      return {
        valid:false,
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
                mobileRules: [
          (v) => !!v || 'Mobile Number is required',
  
        ],

      }
    },

   
    computed:{
      
      contact(){
    
        return this.$store.getters['contact/details'];

      },

     
    },
    methods: {



    }
   

  }
</script>
