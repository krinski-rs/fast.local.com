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
	    	if(response.ok){
    	    	if(callback){
		    		response.json().then(function(json) {
		    	    		callback(json);
		    		});
    	    	}else{
	 		    	return response;
    	    	}
	    	}else{
		    	return response;
	    	}
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
	    	if(response.ok){
	    		response.json().then((json) => {
	    	    	if(callback){
	    	    		callback(json);
	    	    	}
	    		});
	    	}
	    	return response;
	    }).catch((error) => {
	    	return error;
	    });
	}
};

const getData = (event) => {
	
    var current, entries, item, key, output, value;
    output = {};
    entries = new FormData( event.target ).entries();
    /*
     * Iterar sobre valores e atribuir ao item.
     */

    item = entries.next().value;
    while( item ) {
    	/*
    	 * atribuir a variáveis para tornar o código mais legível.
    	 */
    	key = item[0];
    	value = item[1];
    	/*
    	 * Verifique se a chave já existe
    	 */
    	if(Object.prototype.hasOwnProperty.call( output, key)){
    		current = output[ key ];
    		if( !Array.isArray( current ) ){
    			/*
    			 * Se não for um array, converta-o para um array.
    			 */
    			current = output[ key ] = [ current ];
    		}
    		/*
    		 * Adicona o novo valor ao array.
    		 */
    		current.push( value );
    	}else{
    		output[ key ] = value;
    	}
    	
    	item = entries.next().value;
    }
    return output;
}

export { requests, getData };