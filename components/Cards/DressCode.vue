<template>
  <div>
    <v-container fluid>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :footer-props="{ itemsPerPageOptions }"
      >
        <template v-slot:default="props">
          <v-row align="center"  justify="center">
                         
            <v-col
              v-for="(item, index) in props.items"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="6"

            >
              <v-card>
                 <v-img
                    class="white--text"
                    height="350px"
                    :src="item.image"
                  >
                <v-card-title class="align-end fill-height">{{item.day}}</v-card-title>
              </v-img>
                <v-card-text><p>{{item.details}}</p></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>

  </div>

</template>
<script>

  export default {
    header: 'dressCode',
    
    props:{

      items: Array,

    },
    computed:{
     
    },
    data () {
      return {

      itemsPerPageOptions: [1],
      itemsPerPage: 1,
          
        }
    },


}
</script>