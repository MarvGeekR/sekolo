<template>
  <div id="team">
    <learners :key="'learners'"></learners>
  </div>
</template>

<script>
  
  import learners from '~/components/Cards/Learners.vue';
  
  export default {

    components: {
      learners
         
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
          starts_with:'academics/learners'
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
        
            if(res.data.stories[0].name === 'learners'){
             
              let learners = res.data.stories[0].content.list;
              let list = [];

              for(let i=0; i<learners.length; i++){

                let learner = {};

                learner.id = learners[i]._uid;
                learner.name = learners[i].name;
                learner.grade = learners[i].grade;
                learner.term = learners[i].term;
                learner.average = learners[i].average;
                learner.image = learners[i].image;
                learner.position = learners[i].position;

                list.push(learner)
              }


              context.store.commit('learners',list);


              return {
                blok: res.data.stories[0].content
              }
            }
                          
        });
      
    },



  }
</script>


