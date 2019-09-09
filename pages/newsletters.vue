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


