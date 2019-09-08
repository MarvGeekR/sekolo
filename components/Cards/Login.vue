<template>
	<v-card>
    <v-container>
      <userForm  ref="userForm"></userForm>
      <v-card-actions>
        <v-spacer></v-spacer>
        <actionButton color="red" dark @action="login" :action="'login'"></actionButton>
      </v-card-actions>
    </v-container>

  </v-card>
 
</template>
<script>
  
  
  import userForm from '~/components/Forms/User.vue';
  import actionButton from '~/components/Buttons/Action.vue';

  export default {
    name: 'loginCard',
    components:{
      userForm,
      actionButton
    },
    data () {
      return {

        progress:false
      }
    },

    computed:{
      
      user(){
        
        return this.$store.getters['user/details'];

      }
    },

    methods: {

      async login(){
        
       
        if(this.$refs.userForm.$refs.userForm.validate()){

          let member = await this.$store.dispatch('member/findByRef',this.user.refNumber);
         
          if(member){

             
              this.user.authenticated = true;
              this.$router.push({path:'/dashboard'});

              this.$store.commit('member/details',member)
              this.$store.commit('progress',false)
              
          }else{
            
            this.$store.commit('snackBar',{
              value:true,
              message:"Member Reference Number is Invalid",
              type:'error',
              dismiss:true,
            });

            this.$store.commit('progress',false)
          }
        }else{
          this.$store.commit('progress',false)
        }

        
        
      },
     
     
    },
   
   

  }
</script>