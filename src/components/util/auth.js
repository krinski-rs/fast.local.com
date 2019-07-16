import React from 'react';
import {
	Route,
	Redirect
} from "react-router-dom";
import cookie from 'react-cookies';

const getCookie = () => {
	return cookie.load('sso');
};

function PrivateRoute({ component: Component, ...rest }) {
	console.log(rest);
	return (
		<Route {...rest}
			render={ props =>
				(rest.appState.user.logged && !rest.appState.auth.error && rest.appState.user.cookie === getCookie()) ? 
					( <Component {...rest} /> ) : 
					( <Redirect to={{ pathname: "/login", state: { from: props.location } }} /> )
			}
		/>
	);
}

async function login (event, update) {
	event.preventDefault();
	let state = null;	
    var current, entries, item, key, output, value;
    output = {};
    entries = new FormData( event.target ).entries();
    /* Iterar sobre valores e atribuir ao item. */
    item = entries.next().value;
    while( item ) {
    	/*
    	 * atribuir a variáveis para tornar o código mais legível.
    	 */
    	key = item[0];
    	value = item[1];
    	/* Verifique se a chave já existe */
    	if(Object.prototype.hasOwnProperty.call( output, key)){
    		current = output[ key ];
    		if( !Array.isArray( current ) ){
    			/* Se não for um array, converta-o para um array. */
    			current = output[ key ] = [ current ];
    		}
    		/* Adicona o novo valor ao array. */
    		current.push( value );
    	}else{
    		output[ key ] = value;
    	}
    	
    	item = entries.next().value;
    }
    return await fetch('http://sso.local.com/auth/login', {
    	method: 'POST',
    	credentials: 'include',
    	body: JSON.stringify(output),
    	headers: {
    		"Content-Type": "application/json",
    		"ApiKey": "3ada8f87cef4d41dbb385e41d0d55305b649161b"
    	}
    }).then((response) => {
    	if(!response.ok){
    		var retorno = response.json();
    		update({
        		auth: {
    				error: true,
    				msg: "Usuário ou senha inválidos!",
        		},
    			user: {
    				logged: false,
    				cookie: null,
    				name: null,
    				userName: null,
    			}
    		});
			return retorno;
    	}
		return response.json();
    }).then((data) => {
    	if(data.id > 0){
	    	cookie.save('sso', data.AccessToken, { path: '/', domain: '.local.com', httpOnly: false });
	    	state = {
	    		auth: {
					error: false,
					msg: "",
	    		},
    			user: {
    				logged: true,
    				cookie: data.AccessToken,
    				name: data.nome,
    				userName: data.username
    			}
    		};
	    	update(state);
    	}else{
    		state = {
	    		auth: {
					error: true,
					msg: "Usuário ou senha inválidos!",
	    		},
    			user: {
    				logged: false,
    				cookie: null,
    				name: null,
    				userName: null,
    			}
    		};
        	update(state);
    	}
    	return state;
    }).catch((error) => {
		state = {
    		auth: {
				error: true,
				msg: "Usuário ou senha inválidos!",
    		},
			user: {
				logged: false,
				cookie: null,
				name: null,
				userName: null,
			}
		};
    	update(state);
    	return state;
    });
};

const me = (update) => {
    if(!getCookie()){
    	update({
    		auth: {
				error: true,
				msg: "Usuário não logado!",
    		},
			user: {
				logged: false,
				cookie: null,
				name: null,
				userName: null,
			}
		});
    	return ;
    }

    fetch('http://sso.local.com/auth/me', {
    	method: 'GET',
    	credentials: 'include'
    }).then((response) => {
    	if(!response.ok){
    		var retorno = response.json();
			return retorno;
    	}
		return response.json();
    }).then((data) => {
    	if(data.id > 0){
	    	update({
	    		auth: {
					error: false,
					msg: "",
	    		},
    			user: {
    				logged: true,
    				cookie: data.AccessToken,
    				name: data.nome,
    				userName: data.username
    			}
    		});
    	}
    }).catch((error) => {
    	console.log('error: ' + error);
    });
};

const logout = (update) => {
    if(!getCookie()){
    	update({
    		auth: {
				error: true,
				msg: "Usuário não logado!",
    		},
			user: {
				logged: false,
				cookie: null,
				name: null,
				userName: null,
			}
		});
    	return ;
    }

    fetch('http://sso.local.com/auth/logout', {
    	method: 'DELETE',
    	credentials: 'include'
    }).then((response) => {
    	if(!response.ok){
    		var retorno = response.json();
			return retorno;
    	}
		return response.json();
    }).then((data) => {
    	if(data.logout){
	    	update({
	    		auth: {
					error: true,
					msg: "Usuário não logado!",
	    		},
				user: {
					logged: false,
					cookie: null,
					name: null,
					userName: null,
				}
			});
	    	cookie.remove('sso', { path: '/', domain: '.local.com', httpOnly: false });	    	
    	}
    }).catch((error) => {
    	console.log('error: ' + error);
    });
};

export { getCookie, login, me, logout, PrivateRoute };
