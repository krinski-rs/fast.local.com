import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { getCookie } from '../../components/util/auth';


class Home extends React.Component {
	
	renderRedirect = () => {
		return <Redirect to='/login' />
	}
	
	componentDidMount() {
		if(!this.props.user || !this.props.user.logged || (this.props.user.cookie !== getCookie())){
			this.renderRedirect();
		}
	}
	
	render() {
		return (
			<div id="wrapper">
				Opa
		    </div>
    	);
	}
}

Home.propTypes = {
	title: PropTypes.string,
	user: PropTypes.object
};

Home.defaultProps = {
		title: "Home"
};

export default Home;
