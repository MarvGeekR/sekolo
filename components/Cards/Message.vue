<template>
    <v-card>
      Warm welcome {{user.name}}. {{message.content}}
      <v-card-actions>
       <v-btn large color='red' @click="close" flat>
        <v-icon class="mr-2">smile_face</v-icon>
        Thank You
      </v-btn>
    </v-card-actions>
    </v-card>
    
</template>

<script>


  export default {
    name: 'messageCard',
    data () {
      return {
        progress:false
      }
    },
    
    computed:{
      message(){
        console.log(this.$store.getters['message/details'])
        return this.$store.getters['message/details'];
      },
      user(){
        return this.$store.getters['user/details'];
      },
     
    },
    methods: {
     
      async saveReadMgs(){
        this.$store.commit('progress',false);
        

        this.$store.commit('progress',false);
      },

      close(){
        this.$store.commit('progress',false);
        this.$emit('close')
      }


    },

  }
</script>
