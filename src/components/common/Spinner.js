import React, {Component} from 'react';

class Spinner extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className='loader'></div>
		)
	}
};

export default Spinner;