<template>
  <div id="home" v-editable="blok">
      <vision :key="'vision'" :title="'Our Vision'" :text="vision.summary" :image="vision.image"></vision>
      <mission :key="'mission'" :title="'Our Mission'" :text="mission.summary" :image="mission.image"></mission>
  </div>
</template>

<script>
  
  import vision from '~/components/Cards/ImageText.vue';
  import mission from '~/components/Cards/ImageText.vue';
  import axios from 'axios'
  export default {

    components: {
      vision,
      mission      
    },
   
    data() {
      return {
       
      }
    },

    computed:{

      vision(){

        return this.$store.getters.vision;
      },

      mission(){
        return this.$store.getters.mission;
      }

    },

    async asyncData(context) {

        return context.app.$storyapi.get('cdn/stories', {
          version: "draft",
          starts_with:'home/'
        }).then( res => {

           

            if(res.data.stories[0].name === 'index'){
          
              let sections = res.data.stories[0].content.sections;
              
              for(let i=0; i<sections.length; i++){
              
                context.store.commit(sections[i].component,sections[i]);
              }

             
              return {
                blok: res.data.stories[0].content
              }
             
            }
            
        });
      
    },

    mounted(){
      this.$storybridge.on(['input', 'published', 'change'], (event) => {
        if (event.action == 'input') {
          if (event.story.id === this.story.id) {
            this.story.content = event.story.content
          }
        } else {
          window.location.reload()
        }
      })
      
    },


  }
</script>
