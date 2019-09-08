<template>
	<v-card>
    <v-container>
      <userForm  ref="userForm"  :userName="true" :password="true" :confirmPassword="true"></userForm>
      <v-card-actions>
        <v-spacer></v-spacer>
        <actionButton color="red" dark @action="doAction" :action="action" :progressState="progress">{{action}}</actionButton>
      </v-card-actions>
    </v-container>

  </v-card>
 
</template>
<script>
  import userForm from '~/components/Forms/User.vue';
  import actionButton from '~/components/Buttons/Action.vue';

  export default {
    name: 'userCard',
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
      action(){

        if(this.user._id)
          return "Save"
        else
          return "Continue"
      },
      user(){
        
        return this.$store.getters['user/details'];

      }
    },

    methods: {
      async doAction(){
        let check = true;
        switch(this.action){
          case "Continue":
            if(await this.valid(check)){
              this.$emit('stepTo',2)
            }
          break;

          case "Save":
          check = false;
            if(await this.valid (check)){
              let save = await this.$store.dispatch('user/edit',this.user);
              if(save.process){
                this.$store.commit('snackBar',{
                  value:true,
                  message:save.message,
                  type:'info',
                  dismiss:true,
                });
              }
            }
          break;
        }

        this.$store.commit('progress',false);

      },
     async valid(check){
      let results = false;
      this.progress = true;
      this.$store.commit('snackBar',{value:false});
      if(this.$refs.userForm.$refs.userForm.validate()){

        if(this.user.password === this.user.confirmPassword){
          if(check){
              let user = await this.$store.dispatch('user/check',this.user.name);

              if(user.found){
                this.$store.commit('snackBar',{
                  value:true,
                  message:user.message,
                  type:'error',
                  dismiss:true,
                });
                this.$store.commit('progress',false);
              }else{
                
                results = true;
              }
            }else{
              return true;
            }
        }else{
          
          this.$store.commit('snackBar',{
              value:true,
              message:"Passwords do not match. Please enter matching passwords",
              type:'error',
              dismiss:true,
          });
         
        }
        
       }

       this.progress = false;
       return results;
     }
     
    },
   
   

  }
</script>