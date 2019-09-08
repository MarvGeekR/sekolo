<template>
  <div>
    <v-card id="summary" class="mb-3">
      <v-container row class="hidden-sm-and-down">
        <v-row>

          <v-col cols="4">
            <v-img
              :src="image"
              height="240px"
              contain
              class="mb-4 mr-2 ml-1 mt-2"
            ></v-img>
          </v-col>

          <v-col cols="8">
            <div class="flex headline font-weight-bold font-italic">{{title}}</div>
            <v-divider></v-divider>
            <p  class="font-weight-medium mt-2">{{text}}</p>
          </v-col>
        </v-row>

      </v-container>

      <v-container class="hidden-md-and-up mt-12" fluid>
         <v-row>
          <v-col cols="12">
            <v-img  height="235px" :src="image"></v-img>
            <v-card-title>{{title}}</v-card-title>
            <v-divider></v-divider>
            <p>{{text}}</p>
          </v-col>
        </v-row>
        
      </v-container>

    </v-card>
  </div>


</template>
<script>
 
  export default {
    name: 'ImageTextCard',
    props:{
      title:String,
      text:String,
      image:String
    },
    components:{
      
     
    },
    
    data () {
      return {
          
      }
    },

    computed:{

    },

    methods:{

      
    }
   

  }
</script>

<style scoped>
    #summary p{
      white-space: pre-line;
    }
</style>