<template>
  <div>
    <h2 class="flex headline font-weight-bold font-italic mt-5 mb-3">News Letters</h2>
    <v-divider></v-divider>
    <v-card
      class="mx-auto mb-5 mt-2 ml-2"
      v-for="newsletter in newsletters"
      :key="newsletter._uid"
    >
      <v-img
        v-if="newsletter.image"
        class="white--text"
        height="200px"
        :src="newsletter.image"
      >
        
      </v-img>
      <v-card-title>{{newsletter.title}}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>{{newsletter.summary}}</v-card-text>
      <v-card-actions>
        <v-icon
        large
        left
      >
        mdi-calendar
      </v-icon>
      <span class="title font-weight-light">{{newsletter.date}}</span>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  
 
  
  export default {
    name: 'newLetterCard',
    
    data () {
      return {

      }
    },

    computed:{
      
      newsletters(){
       
       return this.$store.getters.newsletters;

      }
    },

    methods: {

   
   
   }

  }
</script>