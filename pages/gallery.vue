<template>
  <div id="gallery" v-editable="blok">
    <gallery :key="'gallery'"></gallery>
</div>
</template>

<script>
  
  import gallery from '~/components/Cards/Gallery.vue';
  
  export default {

    components: {
      gallery
         
    },
   
    data() {
      return {
       
      }
    },

    computed:{

      history(){
        return this.$store.getters.history;
      }

    },
    async asyncData(context) {

        return context.app.$storyapi.get('cdn/stories', {
          version: context.isDev ? "draft" : "published",
          starts_with:'gallery/'
        }).then( res => {

          if(context.store.getters.sliders.length === 0){


           context.app.$storyapi.get('cdn/stories', {
              version: context.isDev ? "draft" : "published",
              starts_with:'home/'
            }).then( res => {

                
                if(res.data.stories[0].name === 'index'){
                  
                  let sections = res.data.stories[0].content.sections;
                  
                  
                  for(let i=0; i<sections.length; i++){
                 
                    context.store.commit(sections[i].component,sections[i]);
                  }

                }
 
            });


          }
           
            if(res.data.stories[0].name === 'gallery'){
              
              context.store.commit('gallery',res.data.stories[0].content.list);

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


