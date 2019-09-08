<template>
  <div>
    <v-btn color="red" :disabled="disabled" dark @click="doAction" :loading="progressVal">{{action}}</v-btn>
    </div> 
</template>

<script>

 

  export default {
    name: 'actionButton',
    props:{
      action:String,
      disabled:Boolean
    },
    data () {
      return {
      }
    },
    computed:{
      progressVal:{
        get(){
          return this.$store.getters.progress;
        },
        set(val){
          this.$store.commit('progress',val);
        }
      }
    },
    methods: {

      doAction(){
        this.$store.commit('progress',true);
        this.$emit('action',this.action);
      }
    },

  }
</script>
