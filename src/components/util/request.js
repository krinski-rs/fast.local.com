
const requests = (data, method, headers, endPoint, callback) => {
	if(data){
	    return fetch(endPoint, {
	    	method: method,
	    	credentials: 'include',
	    	body: JSON.stringify(data),
	    	headers: {
	    		"Content-Type": "application/json",
	    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
	    	},
	    	mode: 'cors',
	    }).then((response) => {
	    	if(!response.ok){
	    		var retorno = response.json();
				return retorno;
	    	}
			return response.json();
	    }).then((data) => {
	    	if(callback){
	    		callback(data);
	    	}
	    	return data;
	    }).catch((error) => {
	    	return error;
	    });

	}else{
		return fetch(endPoint, {
	    	method: method,
	    	credentials: 'include',
	    	headers: {
	    		"Content-Type": "application/json",
	    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
	    	},
	    	mode: 'cors',
	    }).then((response) => {
	    	if(!response.ok){
	    		var retorno = response.json();
				return retorno;
	    	}
			return response.json();
	    }).then((data) => {
	    	if(callback){
	    		callback(data);
	    	}
	    	return data;
	    }).catch((error) => {
	    	return error;
	    });

	}
};

export { requests };
