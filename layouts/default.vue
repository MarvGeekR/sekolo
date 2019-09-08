<template>
  <v-app id="app">
    
    <navDrawer class="hidden-md-and-up"></navDrawer>
    <appBar class="hidden-md-and-up mb-12"></appBar>


      <v-row   class="hidden-sm-and-down">
        <v-col cols="3">
          <v-avatar
            :tile="false"
            :size="335"
            color="grey lighten-4"
          >
           <img :src="logo" alt="school Logo">
          </v-avatar>
        </v-col>
        <v-col cols="9">
          <sliders ></sliders>
        </v-col>
      </v-row>

      <v-row class="hidden-sm-and-down">
        <v-col cols="12">
          <toolBar></toolBar>
        </v-col>
      </v-row>
     

      <v-card>

        <v-row class="hidden-sm-and-down">
          <v-col cols="9">
            <nuxt/>
          </v-col>
          <v-col cols="3">
            <announcement></announcement>
            <v-divider></v-divider>
            <events></events>
          </v-col>
        </v-row>
 
      
        <v-row class="hidden-md-and-up">

          <v-col cols="12">
            <v-container fluid>
              <nuxt/>
            </v-container>
          </v-col>
          
        </v-row>
  

     </v-card>


  

    <v-footer color="green" :fixed="fixed" app>
      <span class="mr-2">&copy; 2019</span>  {{school.name}}
      <v-spacer></v-spacer>
       
    </v-footer>
  </v-app>
</template>

<script>

  import toolBar from '~/components/ToolBars/Index.vue';
  import sliders from '~/components/Carousels/Slider.vue';
  import events from '~/components/Cards/Events.vue';
  import snackBar from '~/components/SnackBar';
  import announcement from '~/components/Cards/Announcement.vue';
  import appBar from '~/components/AppBar/Mobile.vue';
  import navDrawer from '~/components/NavDrawer/Mobile.vue';

  export default {
    name: 'indexLayout',
    components:{
      toolBar,
      sliders,
      snackBar,
      events,
      announcement,
     
      appBar,
      navDrawer
      

    },

    data() {
      return {
        fixed:true,
        aboutItems: [
          { title: 'Our History', route:'history' },
          { title: 'Our Code of Conduct', route:'codeofconduct' }
        ],
        academicsItems: [
          { title: 'Our Best Learners', route:'learners' }
        ]
      }
    },
    computed:{

      drawer:{

        get(){
          return this.$store.getters.drawer
        },
        set(val){
          this.$store.commit('drawer',val)
        }
      },
      sliders(){
       
       return this.$store.getters.sliders;
       
      },

      logo(){

        return this.$store.getters.logo;
      },

      school(){

        return this.$store.getters.school;
      },

       email(){

        if(this.$store.getters.email){
          return this.$store.getters.email.url;
        }
      },

      mobile(){
        return this.$store.getters.mobile;
      },

      telephone(){
       
        return this.$store.getters.telephone;
      },

    },

    methods:{
     
      navigate(page){

        let route = "/"+page
       
        this.$router.push({path:route});
      }
     
    }
  }
</script>

