<template>
  <v-treeview
   :active.sync="active"
    activatable
    active-class="primary--text"
    class="green lighten-1 mt-1 mr-1"
    open-on-click
    transition
    :return-object="true"
    :open-all="openAll"
   :items="items">
     

    <template v-slot:prepend="{ item, active }">
      <v-icon
        v-if="!item.children"
        :color="active ? 'primary' : ''"
      >
        mdi-book
      </v-icon>
    </template>

   </v-treeview>
</template>
<script type="text/javascript">

  export default {

    name: 'treeView',
    props:{
      items:Array
    },
     data () {
      return {
        openAll:true,
        active: [],
      }
    },

    watch:{
      selected: 'getItem'
    },

    mounted(){

    },

    computed: {

      selected () {

        if (!this.active.length) return undefined

        const selectedItm = this.active[0];
       
        return selectedItm
      }

    },

    methods:{

      getItem(){
       
        this.$emit('itemSelected',this.selected)
       
      }
    }
  

  }

</script>