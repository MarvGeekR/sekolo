<template>
  <div id="codeofconduct">
    <codeOfConduct :key="'codeofconduct'"></codeOfConduct>
  </div>
</template>

<script>
  
  import codeOfConduct from '~/components/Cards/CodeOfConduct.vue';
  
  export default {

    components: {
      codeOfConduct
         
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
          starts_with:'about/codeofconduct'
        }).then( res => {

           
        
            if(res.data.stories[0].name === 'codeofconduct'){
             
              context.store.commit('codeofconduct',res.data.stories[0].content);

              return {
                blok: res.data.stories[0].content
              }
            }
                          
        });
      
    },



  }
</script>


