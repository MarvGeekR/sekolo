<template>
  <div id="team">
    <team :key="'team'"></team>
  </div>
</template>

<script>
  
  import team from '~/components/Cards/Team.vue';
  
  export default {

    components: {
      team
         
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
          starts_with:'team/our-team'
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

            if(res.data.stories[0].name === 'Our Team'){
             
              let staffMembers = res.data.stories[0].content.Staff;
              let list = [];

              for(let i=0; i<staffMembers.length; i++){

                let staff = {};

                staff.id = staffMembers[i]._uid;
                staff.name = staffMembers[i].name;
                staff.type = staffMembers[i].type[0].component;
                staff.image = staffMembers[i].image;

                if(staffMembers[i].sgb[0])
                  staff.sgb = staffMembers[i].sgb[0].component;
                else
                  staff.sgb = "";

                if(staffMembers[i].smt[0])
                  staff.smt = staffMembers[i].smt[0].component;
                else
                  staff.smt = ""

                list.push(staff)
              }

              

              context.store.commit('staff',list)

              return {
                blok: res.data.stories[0].content
              }
            }
                          
        });
      
    },



  }
</script>


