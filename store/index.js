
export const strict = false;

export const state = () => ({
  alert: {value:false,message:'',type:'error',dismiss:false},
  snackBar: {value:false,message:'',type:'error'},
  drawer:false,
  progress: false,
  logo:'',
  sliders:[],
  vision: {},
  school:{},
  email:{},
  mobile:{},
  telephone:{},
  mission: {},
  events:[],
  announcement:'',
  history:{},
  codeofconduct:{},
  blok:{},
  staff:[],
  learners:[],
  gallery:[],
  activities:[],
  newsletters:[]
 
})



export const actions = {

  async getDefault (state,store) {

    //let members =  axios.get('http://localhost:3000/api/member/total');
    //let allocations =  axios.get('http://localhost:3000/api/allocation/total');
    //let unallocated =  axios.get('http://localhost:3000/api/allocation/unallocated');
    
    return Promise.resolve(defaultData);

    
  },


  alert (state,info) {

    state.alert = info;
  },
  snackBar (state,info) {

    state.snackBar = info;
  }
}

export const getters = {

  logo (state) {
    return state.logo;
  },
  sliders (state) {
    return state.sliders;
  },
  vision (state) {
    return state.vision;
  },
  mission (state) {
    return state.mission;
  },
  school (state) {
    return state.school;
  },
  email (state) {
    return state.email;
  },
  mobile (state) {
    return state.mobile;
  },
  telephone (state) {
    return state.telephone;
  },
  events (state) {
    return state.events;
  },
  announcement (state) {
    return state.announcement;
  },
  history (state) {
    return state.history;
  },
  codeofconduct (state) {
    return state.codeofconduct;
  },
  blok (state) {

    return state.blok;
  },
  staff (state) {

    return state.staff;
  },
  learners (state) {

    return state.learners;
  },
  gallery (state) {

    return state.gallery;
  },
  activities (state) {

    return state.activities;
  },
  newsletters (state) {

    return state.newsletters;
  },
  drawer (state) {

    return state.drawer;
  },
  progress (state) {

    return state.progress;
  },
  alert (state) {
    return state.alert
  },
  snackBar (state) {
    return state.snackBar
  }
}


export const mutations = {

  logo (state,logo){
    state.logo = logo.image;
  },
  slides (state,payload){

    state.sliders = payload.slides
  },
  vision (state,vision){
    
    state.vision = vision
  },
  mission (state,mission){
    
    state.mission = mission
  },

  School (state,school){
    
    state.school = school
  },

  Email (state,email){
   
    state.email = email
    
  },

  Mobile (state,mobile){
    
    state.mobile = mobile
  },

  Telephone (state,telephone){
    
    state.telephone = telephone
  },

  events (state,payload){

    if(state.events.length === 0 && payload.events.length > 0){

      for(let i=0; i<payload.events.length; i++){

        let event = {};
       
        event.id = payload.events[i]._uid;
        event.date = payload.events[i].date.split(" ")[0];
        event.title = payload.events[i].title;
        event.details = payload.events[i].details;
        event.open = payload.events[i].open;
        event._editable = payload.events[i]._editable

       
        state.events.push(event)
      }

    }
   
  },
  announcement (state,announcement){
    state.announcement = announcement.summary
  },
  history (state,history){
    state.history = history
  },
  codeofconduct (state,codeofconduct){
    state.codeofconduct = codeofconduct
  },
  blok (state,blok){

    state.blok = blok
  },
  staff (state,staff){

    state.staff = staff
  },
  learners (state,learners){

    state.learners = learners

  },
  gallery (state,gallery){

    state.gallery = gallery

  },
  activities (state,activities){

    state.activities = activities

  },
  newsletters (state,newsletters){

    state.newsletters = newsletters

  },
  alert (state,info) {
    state.alert = info;
  },
  drawer (state,val) {
    state.drawer = val;
  },
  progress (state,val) {
    state.progress = val;
  },
  snackBar (state,info) {
    
    state.snackBar = info;
  }
 
  
}