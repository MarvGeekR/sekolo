export const state = () => ({

  person:{_id:'',name:{first:'',last:''}}

})

export const actions = {

	
  	async save (state,person) {

		try {

	        const res = await this.$axios.$post('/api/person/save',person);
	        
	        return Promise.resolve(res);

	      } catch (err) {

	        return Promise.reject(err)
	      }
    
  	},

  	async get (state,personId) {

		try {

	        const res = await this.$axios.$get('/api/person/getById/'+personId);
	        
	        return Promise.resolve(res);

	      } catch (err) {

	        return Promise.reject(err)
	      }
    
  	},

  	async edit (state,person) {

		try {

	        const res = await this.$axios.$put('/api/person/edit',person);
	        
	        return Promise.resolve(res);

	      } catch (err) {

	        return Promise.reject(err)
	      }
    
  	},



  	
}


export const mutations = {

	details (state,details){

		state.person = details;
	
	},

	
}

export const getters = {

	details (state) {

		return state.person;
    
  	},

}