<template>
  <v-layout>
    <v-flex>
      <v-sheet height="350">
        <v-calendar
          :now="today"
          :value="today"
          v-model="start"
          :type="type"
          :end="end"
          color="primary"
          ref="calendar"
        >

          <template v-slot:day="{ date }">
            <template v-for="event in eventsMap[date]">
              <v-menu
                :key="event.id"
                v-model="event.open"
                full-width
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="my-event"
                    v-on="on"
                    v-html="event.title"
                  ></div>
                </template>
                <v-card
                  color="lighten-1"
                  min-width="350px"
                 
                >
                  <v-toolbar
                   color="green"
                  >
                    <v-btn icon>
                      <v-icon>mdi-info</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="event.title"></v-toolbar-title>
                    
                  </v-toolbar>
                  <v-card-title primary-title>
                    <span v-html="event.details"></span>
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn
                      rounded
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
      <v-layout>
      <v-flex
      sm4
      xs12
      class="text-sm-left text-xs-center"
    >
      <v-btn class="mt-2" @click="$refs.calendar.prev()">
        <v-icon
          left
        >
          mdi-keyboard_arrow_left
        </v-icon>
        Prev
      </v-btn>
    </v-flex>
    <v-spacer></v-spacer>
    <v-flex
      sm4
      xs12
      class="text-sm-right text-xs-center"
    >
      <v-btn class="mt-2" @click="$refs.calendar.next()">
        Next
        <v-icon
          right
          dark
        >
          mdi-keyboard_arrow_right
        </v-icon>
      </v-btn>
    </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
  
</template>

<script>

  export default {
    name: 'eventsCalender',
    components:{

    },
    
    data () {
      return {
        today: this.getToday(),
        type: 'month',
        start: this.getToday(),
        end: '2030-12-06',
      }
    },

    computed:{

      events(){
        return this.$store.getters.events;
      },

      eventsMap () {

        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))

        return map
      },


    },

    methods:{

      open (event) {
        alert(event.title)
      },
      getToday(){

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        
        return today
      }
      
    }
   

  }
</script>

<style scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>