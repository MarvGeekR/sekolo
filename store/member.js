
import members from '~/data';
export const state = () => ({

  details:null,
  list:[],

})


export const actions = {

	
  	
  	async save (state,member) {

		try {

	       

	      } catch (err) {

	       
	      }
    
  	},

  	async findByRef (state,refNumber) {

		try {

	       
		    let member = null;
		   

		 	for(var i=0; i<members.length; i++){

		 		if(members[i].refNumber === refNumber){
		 			state.details = members[i];
		 			break;
		 		}
		 	}

	        return state.details;

	      } catch (err) {

	        
	      }
    
  	}
}


export const mutations = {

	list(state,list){

		state.list = list;
	},

	details(state,details){
		
		state.details = details;
	}


}

export const getters = {

	list(state){

		return state.list;
	},
	details(state){

		return state.details;
	}
	
}