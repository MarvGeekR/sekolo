<template>

  <v-list>
    
    <v-list-item v-for="(item, index) in items" :key="index">

      <v-list-item-icon>
        <v-icon>mdi-check-circle</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <p>{{item.text}}</p>
      </v-list-item-content>

      
    </v-list-item>
   
  </v-list>

 
</template>

<script>

  export default {
    name: 'codeTextList',
    
    props:{

      items: Array
     
    },
    computed:{
     
    },
    data () {
      return {

          
        }
    },


}
</script>