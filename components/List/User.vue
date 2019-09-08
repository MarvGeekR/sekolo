<template>

  <v-list>
    <v-list-tile>

      <v-list-tile-content>
        <v-list-tile-title>Member:</v-list-tile-title>
      </v-list-tile-content>

     <v-list-tile-content>
        <v-list-tile-title>{{name}}</v-list-tile-title>
      </v-list-tile-content>

    </v-list-tile>
   
  </v-list>

</template>

<script>
  
  export default {
    name: 'UserList',
    props: {
      name: String,
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