<template>
  <div>
	 <h2 class="flex headline font-weight-bold font-italic mt-5">Best Achievers</h2>
   <v-divider></v-divider>
   <v-container class="hidden-sm-and-down" fluid>
      <v-row>
        <v-col cols="3">
          <codeContext @itemSelected="showDetails" :items="items"></codeContext>
        </v-col>
        <v-col cols="9">
          
          <v-row>
           
            <v-col cols="6" v-for="(item, index) in list"  :key="index">
              
              <v-card 
                v-if="item.position === '1' || item.position === '2'"
                align="center" 
                justify="center"
                >

              
                  <v-avatar
                    size="240"
                  >
                    <v-img
                      :src="item.image"
                      class="mb-4"
                    ></v-img>
                  </v-avatar>

                  <h3 class="headline mb-2">
                  {{ item.name }}
                  </h3>
                  
                  

                  <div  class="blue--text  font-weight-bold">Position: {{ item.position }}</div>

                  <div  class="blue--text subheading font-weight-bold">Average: {{ item.average }}%</div>

                   <div  class="blue--text  font-weight-bold">Grade: {{ item.grade }}</div>

          
      
              
              </v-card>

           
            
            </v-col>

          </v-row>

         


          <v-row class="mt-3">
           
            <v-col cols="4"  v-for="(item, index) in list"  :key="index" v-if="item.position !== '1' && item.position !== '2'">
              
                <v-card 
                align="center" 
                justify="center"

                >

              
                  <v-avatar
                    size="240"
                  >
                    <v-img
                      :src="item.image"
                      class="mb-4"
                    ></v-img>
                  </v-avatar>

                  <h3 class="headline mb-2">
                  {{ item.name }}
                  </h3>
                  
                  <div  class="blue--text  font-weight-bold">Position: {{ item.position }}</div>

                  <div  class="blue--text subheading font-weight-bold">Average: {{ item.average }}%</div>

          
                   <div  class="blue--text  font-weight-bold">Grade: {{ item.grade }}</div>
              
              </v-card>

           
            
            </v-col>

          </v-row>
             
        </v-col>
      </v-row>
   </v-container>

   <v-container class="hidden-md-and-up" fluid>

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
       
        <v-col>
          
          <v-row>
           
            <v-col cols="12" v-for="(item, index) in list"  :key="index">
              
              <v-card 
                v-if="item.position === '1' || item.position === '2'"
                align="center" 
                justify="center"
                >

              
                  <v-avatar
                    size="240"
                  >
                    <v-img
                      :src="item.image"
                      class="mb-4"
                    ></v-img>
                  </v-avatar>

                  <h3 class="headline mb-2">
                  {{ item.name }}
                  </h3>
                  
                  

                  <div  class="blue--text  font-weight-bold">Position: {{ item.position }}</div>

                  <div  class="blue--text subheading font-weight-bold">Average: {{ item.average }}%</div>

                   <div  class="blue--text  font-weight-bold">Grade: {{ item.grade }}</div>

          
      
              
              </v-card>

           
            
            </v-col>

          </v-row>

         


          <v-row class="mt-3">
           
            <v-col cols="12"  v-for="(item, index) in list"  :key="index" v-if="item.position !== '1' && item.position !== '2'">
              
                <v-card 
                align="center" 
                justify="center"

                >

              
                  <v-avatar
                    size="240"
                  >
                    <v-img
                      :src="item.image"
                      class="mb-4"
                    ></v-img>
                  </v-avatar>

                  <h3 class="headline mb-2">
                  {{ item.name }}
                  </h3>
                  
                  <div  class="blue--text  font-weight-bold">Position: {{ item.position }}</div>

                  <div  class="blue--text subheading font-weight-bold">Average: {{ item.average }}%</div>

          
                   <div  class="blue--text  font-weight-bold">Grade: {{ item.grade }}</div>
              
              </v-card>

           
            </v-col>

          </v-row>
             
        </v-col>
      </v-row>
   </v-container>

  </div>
 
</template>
<script>
  
  import codeContext from '~/components/Treeviews/Context.vue';
  import contentDetails from '~/components/List/CodeOfConduct.vue';
  
  export default {
    name: 'learnersCard',
    components:{

      codeContext,
      contentDetails
    },
    data () {
      return {

        item:{},
        children:['8','9','10','11','12'],
        listType: 'All'

      }
    },

    computed:{

      items(){

       
    
        let results = [];

        let itm = {id:0, name:'Grades',children:[]};
        results.push(itm);


        for(let i=0; i<this.children.length; i++){

          let child = {};

          child.id = i+1;
          child.name = this.children[i];
         
       

          results[0].children.push(child);
         
        }
      

        return results
      },

      list:{

        get(){

          let results = [];
          let learners = this.$store.getters.learners;

          if(this.listType === "All")
            return learners;

          for(let i=0; i<learners.length; i++){
              if(learners[i].grade === this.listType)
                results.push(learners[i]);
          }

         
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