<template>
  <v-list two-line>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>School Starts</v-list-item-title>
        <v-list-item-subtitle>{{item.schoolStarts}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Short Break</v-list-item-title>
        <v-list-item-subtitle>{{item.shortBreak}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Register Period</v-list-item-title>
        <v-list-item-subtitle>{{item.registerPeriod}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Lunch Time</v-list-item-title>
        <v-list-item-subtitle>{{item.longBreak}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>School Out</v-list-item-title>
        <v-list-item-subtitle>{{item.schoolOut}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
  </v-list>
</template>
<script>
  
  export default {
    name: 'schoolTimesList',
    data () {
      return {
          
         
        }
    },
    props:{
      item:Object
    },
    computed:{
     
    },
    methods:{

     

    }

  }
</script>