<template>
  <div>

   <h2 class="flex headline font-weight-bold font-italic mt-5">Mural Activities</h2>
   <v-divider></v-divider>

   <v-container fluid class="hidden-sm-and-down">
      <v-row>
        <v-col cols="3">
          <context @itemSelected="showDetails" :items="items"></context>
        </v-col>
        <v-col cols="9">
            <activity v-for="item in list" :key="item._uid" :items="item"></activity>
        </v-col>
      </v-row>
   </v-container>

   <v-container fluid class="hidden-md-and-up">

      <v-menu offset-y class="hidden-md-and-up">
        <template v-slot:activator="{ on }">
            <v-btn
              color="green"
              dark
              v-on="on"
            >
              Contents
            </v-btn>
          </template>
          <v-list
            nav
            dense
          >
            <v-list-item-group>
              <v-list-item
                v-for="(item, i) in items[0]['children']"
                :key="i"
              >

                <v-list-item-content>

                  <v-list-item-title  @click="showDetails(item)">{{item.name}}</v-list-item-title>


                    <v-list v-if="item.children">

                      <v-list-item 
                        v-for="(item, i) in item.children"
                        :key="i"
                        @click="showDetails(item)">
                           <v-list-item-title>{{item.name}}</v-list-item-title>
                      </v-list-item>
                 
                    </v-list>
                     <v-divider></v-divider>
                </v-list-item-content>

              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

      <v-row>
        <v-col cols="12">
            <activity v-for="item in list" :key="item._uid" :items="item"></activity>
        </v-col>
      </v-row>
   </v-container>

  </div>
 
</template>
<script>
  
  import context from '~/components/Treeviews/Context.vue';
  import activity from '~/components/Cards/Activity.vue';
  
  export default {
    name: 'activitiesCard',
    components:{

      context,
      activity
    },
    data () {
      return {

        item:{},
        listType: 'Soccer'

      }
    },

    computed:{

      items(){

       
    
        let results = [];

        let itm = {id:0, name:'Extra Mural Activities',children:[]};
        results.push(itm);

        let activities = this.$store.getters.activities;

        for(let i=0; i<activities.length; i++){

          let child = {};

          child.id = i+1;
          child.name = activities[i].component;
         
       

          results[0].children.push(child);
         
        }
      

        return results
      },

      list:{

        get(){

          let results = [];
          let activities = this.$store.getters.activities;

      
          for(let i=0; i<activities.length; i++){
              if(activities[i].component === this.listType)
                results.push(activities[i].activities);
          }

           console.log(results)
          return results;
        },

        set(val){

          this.listType = val;
        }


      }
      
    },

    methods: {

      showDetails(item){
       
        this.list = item.name;
        
      }
   
   }

  }
</script>