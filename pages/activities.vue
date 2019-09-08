<template>
  <div id="gallery" v-editable="blok">
  
    <activities :key="'activities'"></activities>
</div>
</template>

<script>
  
  import activities from '~/components/Cards/Activities.vue';
  
  export default {

    components: {
      activities
         
    },
   
    data() {
      return {
       
      }
    },

    computed:{

      

    },
    async asyncData(context) {

        return context.app.$storyapi.get('cdn/stories', {
          version: context.isDev ? "draft" : "published",
          starts_with:'activities/activities'
        }).then( res => {

           
          
           
            if(res.data.stories[0].name === 'activities'){
              
              context.store.commit('activities',res.data.stories[0].content.list);

               return {
                blok: res.data.stories[0].content
              }
              
            }
            
        });
      
    },

    mounted(){
        this.$storybridge.on("change", () => {
          location.reload(true)
      })
    }

  }
</script>


