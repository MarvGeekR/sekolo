<template>
  <v-row>
    <v-col cols="12" sm="12">
       
      <v-card :key="item._uid" v-for="(item, index) in items">
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(image, i) in item.images"
              :key="i"
              class="d-flex child-flex"
              cols="6"
            >
              <v-card flat tile class="d-flex">
               
                <v-img
                  :src="image.filename"
                  :lazy-src="image.filename"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                
              </v-card>

            </v-col>
          </v-row>
        </v-container>
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-text>{{item.summary}}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
 
  export default {
    name: 'activityCard',
    props:{
      items:Array
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