export const state = () => ({

  message:{_id:'',memberId:'',content:''}

})

export const actions = {

	 async getDetailsContent (state) {

		try {

	        const res = await this.$axios.$get('/api/message/detailsContent');
	        
	        return Promise.resolve(res);

	      } catch (err) {

	        return Promise.reject(err)
	      }
    
  	}
	
  	

  	
}


export const mutations = {

	details (state,details){

		state.message = details;
		
	}

	
}

export const getters = {

	details (state) {

		return state.message;
    
  	}

}