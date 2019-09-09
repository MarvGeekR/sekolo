<template>

  <div>
   <v-toolbar color="green">
     

        <v-btn color="green" rounded large class="mr-2" @click="navigate('')" >Home</v-btn>
        <v-menu open-on-hover top offset-x>
          <template v-slot:activator="{ on }">
            <v-btn
              color="green"
              dark
              v-on="on"
              class="mr-3"
              large
            >
              About US
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in aboutItems"
              :key="index"
              @click="navigate(item.route)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
          <v-menu open-on-hover top offset-x>
          <template v-slot:activator="{ on }">
            <v-btn
              color="green"
              dark
              v-on="on"
              class="mr-3"
              large
            >
              Academics
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in academicsItems"
              :key="index"
              @click="navigate(item.route)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn color="green" large rounded   class="mr-3" @click="navigate('team')">Our Staff</v-btn>
        <v-btn color="green" large rounded   class="mr-3" @click="navigate('activities')">Mural Activities</v-btn>
         <v-btn color="green" rounded large  @click="navigate('gallery')">Gallery</v-btn>
    


      <div class="flex-grow-1"></div>
       <v-btn color="green" large rounded   class="mr-3" @click="navigate('newsletters')">News Letters</v-btn>
       <template>
        <div class="mr-4">
        <v-icon>mdi-email</v-icon>
        {{email}}
      </div>
      <div class="mr-3">
        <v-icon>mdi-phone</v-icon>
        {{telephone.number}}
      </div>
      <div>
        <v-icon>mdi-cellphone-basic</v-icon>
        {{mobile.number}}
      </div>
      </template>
    </v-toolbar>
  </div>
</template>

<script>

  

  export default {
    name: "indexToolBar",
    components:{
      
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
          return this.$store.getters.drawer;
        },
        set(val){
          this.$store.commit('drawer',val)
        }
      },

      logo(){

        return this.$store.getters.logo;
      },

      school(){
        return this.$store.getters.school;
      },

      mobile(){
        return this.$store.getters.mobile;
      },

      telephone(){
       
        return this.$store.getters.telephone;
      },

      email(){

        if(this.$store.getters.email.address){
          
          return this.$store.getters.email.address.url;
        }
      }

    },
    methods:{
     
      navigate(page){

        let route = "/"+page
       
        this.$router.push({path:route});
      }
     
    }
  }
</script>