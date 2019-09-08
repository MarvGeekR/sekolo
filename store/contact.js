export const state = () => ({

  contact:{_id:'',mobileNumber1:'',email1:''}

})

export const actions = {

	 async get (state,contactId) {

		try {

	        const res = await this.$axios.$get('/api/contact/getById/'+contactId);
	        
	        return Promise.resolve(res);

	      } catch (err) {

	        return Promise.reject(err)
	      }
    
  	},
	
  	async edit (state,contact) {

		try {

	        const res = await this.$axios.$put('/api/contact/edit/',contact);
	        
	        return Promise.resolve(res);

	      } catch (err) {

	        return Promise.reject(err)
	      }
    
  	},

  	async exists (state,contact) {

		try {
			
	        const res = await this.$axios.$post('/api/contact/exists',contact);
	
	        return Promise.resolve(res);

	      } catch (err) {

	        return Promise.reject(err)
	      }
    
  	},

  	async save (state,contact) {

		try {

	        const res = await this.$axios.$post('/api/contact/save',contact);
	        return Promise.resolve(res);

	      } catch (err) {

	        return Promise.reject(err)
	      }
    
  	},

  	
}


export const mutations = {

	details (state,details){
		state.contact = details;
	},

	reset (state,details){
		state.contact._id = "";
		state.contact.mobileNumber1 = "";
		state.contact.email1 = "";
	},
	
	
}

export const getters = {

	details (state) {

		return state.contact;
    
  	},

}