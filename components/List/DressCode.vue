<template>
  <v-list two-line>
    <template v-for="(item, index) in items">
       <v-subheader class="mb-3">
          {{ item.day }}
        </v-subheader>
      
      <v-list-tile avatar>
        
        <v-list-tile-avatar>
              <v-avatar
                size="90"
                class="mb-5 mt-3"
              >
                <v-img
                  :src="item.image"
                  
                ></v-img>
              </v-avatar>
        </v-list-tile-avatar>

        <v-list-tile-content class="ml-3">
          {{item.details}}
        </v-list-tile-content>

      </v-list-tile>
     <v-divider></v-divider>
  </template>
  </v-list>
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

          
        }
    },


}
</script>