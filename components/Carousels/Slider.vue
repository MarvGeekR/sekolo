<template>
  <v-carousel

    
  >
    <v-carousel-item
      v-for="(item,i) in sliders"
      :key="i"
      :src="item.filename"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  
  export default {
    name: "slider",
    data() {
      return {
       
      }
    },
    methods:{
     
     
    },
    computed:{
     sliders(){
     	return this.$store.getters.sliders;
     }
     
    }
  }
</script>