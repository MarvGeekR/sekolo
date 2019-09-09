<template>
  <div id="history" v-editable="blok">
    <history :key="'history'" :title="'Our History'" :text="history.summary" :image="history.image"></history>
</div>
</template>

<script>
  
  import history from '~/components/Cards/ImageText.vue';
  
  export default {

    components: {
      history
         
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
          version: "draft",
          starts_with:'about/history'
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


          if(res.data.stories[0].content.component === 'history'){
              
            context.store.commit('history',res.data.stories[0].content);

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


