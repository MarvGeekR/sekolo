
import members from '~/data';

export const state = () => ({
  user:{_id:'',refNumber:'',name:'',password:'',confirmPassword:'',type:'', blocked:false, referral:'',authenticated:false,exists:false},
  users:[]
})





export const actions = {

	

	async login (state,refNumber) {

		try {

			
		    let member = null;
		   

		 	for(var i=0; i<members.length; i++){

		 		if(members[i].refNumber === refNumber){
		 			member = members[i];
		 			break;
		 		}
		 	}

	        return member;

	      } catch (err) {

	       
	      }
    
  	},

  	




  	
}


export const mutations = {
	id (state,userId){

		state.user._id = userId;
		state.user.authenticated = true;
	
	},
	name (state,name){

		state.user.name = name;
	},

	


  	type (state,type) {

		state.user.type = type;
    
  	},

  	users (state,users) {

		state.users = users;
    
  	},

  	reset (state) {

		state.user._id = '';
	    state.user.name = '';
	    state.user.password = '',
	    state.user.confirmPassword = '';
	    state.user.isRegistered = false;
	    state.user.type = "";
	    state.user.blocked = false;
	    state.user.authenticated = false;
    
  	},



}

export const getters = {



  	details (state) {

		return state.user;
    
  	},

  	users (state) {

		return state.users;
    
  	},

  	passwordValid(state){

  		if(state.user.password === state.user.confirmPassword){
  			
  			return true;
  		}else{
  			return false;
  		}
  	}

}