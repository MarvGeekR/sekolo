<template>
  <v-card  
   class="mx-auto"
    width="300">
    <v-list>

      

       <v-list-item>

         <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{email}}</v-list-item-title>
       
      </v-list-item>


      <v-divider></v-divider>

      <v-list-item>
         <v-list-item-icon>
          <v-icon>mdi-phone</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{telephone.number}}</v-list-item-title>
        <v-divider></v-divider>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
         <v-list-item-icon>
          <v-icon>mdi-cellphone</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{mobile.number}}</v-list-item-title>

      </v-list-item>
       <v-divider></v-divider>
      <v-list-item @click="navigate('')">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-group
        prepend-icon="mdi-book-open-page-variant"
        value="true"
      >

        <template v-slot:activator>
          <v-list-item-title>About Us</v-list-item-title>
        </template>

        
          
          <v-list-item v-for="(about, i) in abouts"
            :key="i"
            @click="navigate(about.route)">
            <v-list-item-title>{{about.title}}</v-list-item-title>
          </v-list-item>
          
       

       <v-divider></v-divider>
      </v-list-group>

      <v-list-item @click="navigate('team')">
        <v-list-item-icon>
          <v-icon>mdi-account-group</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Our Staff</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
     
       <v-list-item @click="navigate('activities')">
        <v-list-item-icon>
          <v-icon>mdi-soccer</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Mural Activities</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>
       <v-list-item @click="navigate('learners')">
        <v-list-item-icon>
          <v-icon>mdi-school</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Academics</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="navigate('gallery')">
        <v-list-item-icon>
          <v-icon>mdi-file-image</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Gallery</v-list-item-title>
      </v-list-item>

    </v-list>
  </v-card>
</template>
<script>
  import events from '~/components/Cards/Events.vue';
  export default {
    name: 'drawerList',
    components:{

      events
    },
    data () {
      return {
          
          abouts: [{title:'History',route:'history'},{title:'Code of Conduct',route:'codeofconduct'} ],
          staff: ['SMT','SGB','Educators','PS Staff','LRC'],
          activities: ['Athletics','Chess','Cricket','Debate','Music','Netball'],
        }
    },
    computed:{

       mobile(){
        return this.$store.getters.mobile;
      },

      telephone(){
       
        return this.$store.getters.telephone;
      },

      email(){
       
        if(this.$store.getters.email){
          console.log(this.$store.getters.email)
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