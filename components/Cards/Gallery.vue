<template>
  <div>
    <h2 class="flex headline font-weight-bold font-italic mt-5">Our Gallery</h2>
    <v-container fluid class="hidden-sm-and-down">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="(image, index) in gallery.images"
                  :key="index"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-card flat tile >
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="hidden-md-and-up">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="(image, index) in gallery.images"
                  :key="index"
                  class="d-flex child-flex"
                  cols="12"
                >
                  <v-card flat tile >
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
 
  export default {
    name: 'Gallery',
    props:{
     
    },
    components:{
      
     
    },
    
    data () {
      return {
          
      }
    },

    computed:{

      gallery(){
        console.log(this.$store.getters.gallery)
        let results = [];
        let galleries = this.$store.getters.gallery;
        let gallery = {};
        for(let i=0; i<galleries.length; i++){

         

          gallery.event = galleries[i].name;
          gallery.images = [];

          for(let j=0; j<galleries[i].images.length; j++){

              let image = {};
              image.id = j;
              image.filename = galleries[i].images[j].filename;
              gallery.images.push(image)
          }


         
        }
        console.log(gallery)
        return gallery;
      }
    },

    methods:{

      
    }
   

  }
</script>