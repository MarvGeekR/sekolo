<template>
  <v-treeview
   :active.sync="active"
    activatable
    active-class="primary--text"
    class="grey lighten-5"
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
        book
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