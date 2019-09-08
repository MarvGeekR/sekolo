<template>
  <div>
    <h2 class="flex headline font-weight-bold font-italic mt-5" >Code of conduct</h2>
    <v-container fluid class="hidden-sm-and-down">
      <v-row>
        <v-col cols="3">
          <codeContext @itemSelected="showDetails" :items="items"></codeContext>
        </v-col>

        <v-col cols="9">
          <h2 class="flex headline font-weight-bold font-italic mt-1 mb-1">{{item.header}}</h2>
          <v-divider></v-divider>
          <p class="mt-1">{{item.intro}}</p>
          <v-divider></v-divider>
          <contentDetails v-if="item.showList"  :items="item.list"></contentDetails>
          <dressCode v-if="item.dressCode"  :items="item.list"></dressCode>
          <schoolTimes v-if="item.schoolTimes"  :item="item.list"></schoolTimes>
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
            <h2 class="flex headline font-weight-bold font-italic mt-1 mb-1">{{item.header}}</h2>
            <v-divider></v-divider>
            <p class="mt-1">{{item.intro}}</p>
            <v-divider></v-divider>
            <contentDetails v-if="item.showList"  :items="item.list"></contentDetails>
            <dressCode v-if="item.dressCode"  :items="item.list"></dressCode>
            <schoolTimes v-if="item.schoolTimes"  :item="item.list"></schoolTimes>
          </v-col>

        </v-row>
     
    </v-container>


  </div>
 
</template>
<script>
  
  import codeContext from '~/components/Treeviews/Context.vue';
  import contentDetails from '~/components/List/CodeOfConduct.vue';
  import dressCode from '~/components/Cards/DressCode.vue';
  import schoolTimes from '~/components/List/SchoolTimes.vue';
  
  export default {
    name: 'annoucementCard',
    components:{

      codeContext,
      contentDetails,
      dressCode,
      schoolTimes
    },
    data () {
      return {

        item:{header: "Select the content"},

      }
    },

    computed:{

      items(){

       

        let results = [];

        let itm = {id:0, name:'Contents',children:[]};
        results.push(itm);

        let list = this.$store.getters.codeofconduct.list;

        for(let i=0; i<list.length; i++){

          let child = {};
          child.id = i+1;
          child.name = list[i].component;
          child.content = {};
          child.content.intro = list[i].intro;

          if(child.name === 'Dress Code'){

            child.children = [];

            for(let key in list[i]){
          
                if(key === 'Boys' || key === 'Girls'){

          
                   let sibling = {};

                   sibling.name = key;
                   sibling.id = key;
                   sibling.content = list[i][key][0];
                   child.children.push(sibling)
                }
            }
           
          }else if(child.name === 'School Times'){

            child.children = [];

            for(let key in list[i]){
          
                if(key === 'MondayToThurday' || key === 'Friday'){

          
                   let sibling = {};

                   sibling.name = key;
                   sibling.id = key;
                   sibling.content = list[i][key][0];
                   child.children.push(sibling)
                }
            }
           
          }else{
             child.content.items = list[i].list
          }

          results[0].children.push(child);
         
        }
      
        
      
        return results
      }
      
    },

    methods: {

      showDetails(item){
       
       

        this.item = {};
        this.item.showList = false;
        this.item.dressCode = false;
        this.item.schoolTimes = false;


        if(item.name == 'Dress Code' || 
         
          item.name == 'Boys' ||
          item.name == 'Girls'){
          
          this.item.header = item.name + " Dress Code";
          this.item.intro = "All learners are expected to wear a full school uniform as outlined below";
          this.item.dressCode = true;
          this.item.list = item.content.uniform

        }else if( item.name == 'School Times' || 
          item.name === 'Friday' ||
          item.name === 'MondayToThurday'){

          if(item.name === 'Friday')
            this.item.header = "School Times: Friday";
          else{
            this.item.header = "School Times: Monday to Thursday"
          }
          this.item.intro = "All learners are expected to follow school times";
          this.item.schoolTimes = true;
          this.item.list = item.content

          

        }else{


          this.item.showList = true;
          this.item.header = item.name;
          this.item.intro = item.content.intro;
          this.item.list = item.content.items;
        }

        

        
      }
   
   }

  }
</script>