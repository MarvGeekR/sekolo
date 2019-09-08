<template>


    <v-stepper v-model="step">

      <v-stepper-header>

        <v-stepper-step step="1"  :complete="step > 1">User Details</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step > 2">Contact Details</v-stepper-step>
      </v-stepper-header>

       <v-stepper-content step="1">
          <userCard @stepTo="stepTo"></userCard>
       </v-stepper-content>

       <v-stepper-content step="2">
          <contactCard @stepTo="stepTo"></contactCard>
       </v-stepper-content>


     


    </v-stepper>

 
</template>
<script>

  import userCard from '~/components/Cards/User.vue';
  import contactCard from '~/components/Cards/Contact.vue';

  

  export default {
    name: 'RegistrationStepper',
    components:{
     userCard,
     contactCard,
  
    },
    data () {
      return {
        step: 0
      }
    },
    computed:{
      user(){
        return this.$store.getters['user/details'];
      },
      contact(){
       
        return this.$store.getters['contact/details'];
      },
      person(){
        return this.$store.getters['person/details'];
      },
      bank(){
        return this.$store.getters['bank/details'];
      },
      member(){
        return this.$store.getters['member/details'];
      },
      investment(){
        return this.$store.getters['investment/details'];
      }
    },
    methods: {

      stepTo(step){
        this.step = step;
      },

      async join(){
        
        this.$store.commit('progress',true);
        let user = this.$store.dispatch('user/save',this.user);
        let contact = this.$store.dispatch('contact/save',this.contact);

        let self = this;
        await Promise.all([user,contact])
        .then(async function(savedDetails){

          self.user._id = savedDetails[0]._id;
          self.userId = self.user._id;
          self.user.authenticated = true;

          self.contact._id = savedDetails[1]._id;
          self.person.contactId = self.contact._id;

          let person = await self.$store.dispatch('person/save',self.person);
          let bank = await self.$store.dispatch('bank/save',self.bank);
          


          self.person._id = person._id;
          self.bank._id = bank._id;

          self.member.userId = self.user._id;
          self.member.personId = self.person._id;
          self.member.bankId = self.bank._id;


          let member = await self.$store.dispatch('member/save',self.member);

          
          self.investment.memberId = member._id;
          self.investment.unallocated = self.investment.amount;
         
          let investment = await  self.$store.dispatch('investment/save',self.investment);
          self.investment._id = investment._id;

          self.$store.commit('snackBar',{
              value:true,
              message:investment.message,
              type:'info',
              dismiss:true,
            });

          self.$router.push({path:'/dashboard'});
          self.$store.commit('progress',false);
          if(self.user.referral !== ''){

            let referral = {
              user: self.user.name,
              name: self.user.referral,
              investmentId: self.investment._id,
              amount: self.investment.amount,

            }

       
            let interest = await self.$store.dispatch('referral/save',referral);
            self.$store.dispatch('investment/allocate',member._id);
          }

          

        })
      }

    }
}
</script>
