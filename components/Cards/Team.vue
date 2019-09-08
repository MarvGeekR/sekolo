<template>
  <div>

	 <h2 class="flex headline font-weight-bold font-italic mt-5">Our Staff</h2>
   
    <v-container fluid class="hidden-sm-and-down">
   

  
        <v-divider></v-divider>


           <h2 v-if="listType === 'All' || listType === 'SMT'" class="flex headline font-weight-bold font-italic">SMT</h2>
           <v-divider></v-divider>

          <v-row    v-if="listType === 'All' || listType === 'SMT'" >
           
            <v-col cols="6" v-for="(item, index) in list"  :key="index">
              
              <v-card 
               v-if="item.smt === 'Principal' || item.smt === 'Deputy Principal'"
                align="center" 
                justify="center"
                
                
               
                class="mt-3"
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
                  
                  <div  class="blue--text subheading font-weight-bold">{{ item.smt }}</div>

          
      
              
              </v-card>

           
            
            </v-col>

          </v-row>


          <v-divider></v-divider>

          <h2 v-if="listType === 'SGB' || listType === 'All'" class="flex headline font-weight-bold font-italic">SGB</h2>
          <v-divider></v-divider>

          <v-row    v-if="listType === 'All' || listType === 'SGB'" >
           
            <v-col cols="6" v-if="item.sgb" v-for="(item, index) in list"  :key="index">
              
              <v-card 
              
                align="center" 
                justify="center"
                
                
               
                class="mt-3"
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
                  
                  <div  class="blue--text subheading font-weight-bold">{{ item.sgb }}</div>

          
      
              
              </v-card>

           
            
            </v-col>

          </v-row>


          <v-divider></v-divider>
          <h2 v-if="listType === 'Educators' || listType === 'All'" class="flex headline font-weight-bold font-italic">Educators</h2>
          <v-divider></v-divider>
          <v-row v-if="listType === 'Educators' || listType === 'All'">
            
            <v-col cols="4"  v-if="item.type === 'Educators'" v-for="(item, index) in list"  :key="index">
          
            <v-card 
           
              align="center" 
              justify="center"
              
              class="mt-3"
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

              
            </v-card>
            
       
          </v-col>
          
          </v-row>

          <v-divider></v-divider>
          <h2 v-if="listType === 'PS Staff' || listType === 'All'" class="flex headline font-weight-bold font-italic">PS Staff</h2>
          <v-divider></v-divider>
          <v-row v-if="listType === 'PS Staff' || listType === 'All'"  justify="center">
            
            <v-col cols="4" v-if="item.type === 'PS Staff'" v-for="(item, index) in list"  :key="index">
            <v-container>
            <v-card
             
            align="center" 
            justify="center"
            class="mt-3"
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

              

            </v-card>
            
          </v-container>
          </v-col>
        
          </v-row>
         
     




   
   </v-container>


  <v-container fluid class="hidden-md-and-up">
   

      
        <v-divider></v-divider>


           <h2 v-if="listType === 'All' || listType === 'SMT'" class="flex headline font-weight-bold font-italic">SMT</h2>
           <v-divider></v-divider>

          <v-row   v-if="listType === 'All' || listType === 'SMT'">
           
            <v-col cols="12" >
              
              <v-card 
               v-if="item.smt === 'Principal' || item.smt === 'Deputy Principal'"
                align="center" justify="center"
                v-for="(item, index) in list" 
                :key="index"
                class="mt-3"
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
                  
                  <div  class="blue--text subheading font-weight-bold">{{ item.smt }}</div>

          
      
              
              </v-card>

           
            
            </v-col>

          </v-row>


          <v-divider></v-divider>

          <h2 v-if="listType === 'SGB' || listType === 'All'" class="flex headline font-weight-bold font-italic">SGB</h2>
          <v-divider></v-divider>

          <v-row v-if="listType === 'SGB' || listType === 'All'"  justify="center">
            
          <v-col cols="12" >
            <v-container>
            <v-card 
              v-if="item.sgb"
              v-for="(item, index) in list"  :key="index"
              align="center" justify="center"
              class="mt-3"
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
                  
                  <div  class="blue--text subheading font-weight-bold">{{ item.sgb }}</div>
              

            </v-card>

            
          </v-container>
          </v-col>
          
          </v-row>


          <v-divider></v-divider>
          <h2 v-if="listType === 'Educators' || listType === 'All'" class="flex headline font-weight-bold font-italic">Educators</h2>
          <v-divider></v-divider>
          <v-row v-if="listType === 'Educators' || listType === 'All'">
            
            <v-col cols="12" >
            <v-container>
            <v-card 
            v-if="item.type === 'Educators'"
            align="center" justify="center"
            
              v-for="(item, index) in list"
              :key="index"
              class="mt-3"
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

              
                
            </v-card>
            
          </v-container>
          </v-col>
          
          </v-row>

          <v-divider></v-divider>
          <h2 v-if="listType === 'PS Staff' || listType === 'All'" class="flex headline font-weight-bold font-italic">PS Staff</h2>
          <v-divider></v-divider>
          <v-row v-if="listType === 'PS Staff' || listType === 'All'"  justify="center">
            
            <v-col cols="12">
            <v-container>
            <v-card
            v-for="(item, index) in list"  :key="index" 
            v-if="item.type === 'PS Staff'"
            align="center" justify="center"
            
            class="mt-3"
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

              

            </v-card>
            
          </v-container>
          </v-col>
        
          </v-row>
         
     




   
   </v-container>
  </div>
 
</template>
<script>
  
  import codeContext from '~/components/Treeviews/Context.vue';
  import contentDetails from '~/components/List/CodeOfConduct.vue';
  
  export default {
    name: 'teamCard',
    components:{

      codeContext,
      contentDetails
    },
    data () {
      return {

        item:{},
        children:['All','SMT','SGB','Educators','PS Staff','LRC','Interns','Volunteers'],
        listType:'All',


      }
    },

    computed:{

      items(){

       
    
        let results = [];

        let itm = {id:0, name:'Context',children:[]};
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
          let staff = this.$store.getters.staff;

           if(this.listType === "All")
                return staff;


          for(let i=0; i<staff.length; i++){

             if(this.listType === 'SGB'){
                if(staff[i].sgb)
                    results.push(staff[i])
              }

              if(this.listType === 'SMT'){
                if(staff[i].smt)
                    results.push(staff[i])
              }

              if(this.listType !== 'SMT' || this.listType !== 'SGB'){
                if(staff[i].type === this.listType)
                    results.push(staff[i])
              }

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