<template>
  <div id="newsletters" v-editable="blok">
    <newsLetter :key="'newsLetter'"></newsLetter>
</div>
</template>

<script>
  
  import newsLetter from '~/components/Cards/NewsLetter.vue';
  
  export default {
    name:'newslettersPage',
    components: {
      newsLetter
         
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
          starts_with:'newsletter/newsletter'
        }).then( res => {

      

            if(res.data.stories[0].name === 'newsletter'){
             
              context.store.commit('newsletters',res.data.stories[0].content.newsletters);

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


