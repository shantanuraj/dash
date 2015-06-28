import React from 'react';

class Banner extends React.Component {
	render() {
		return (
			<div style={styles.banner}>
				<p>Welcome to <img src="/images/dash.png" width={40} height={40}/></p>
			</div>
		);
	}
}

var styles = {
	banner: {
		display: 'flex',
		backgroundColor: '#065150',
		color: 'white',
		textAlign: 'center',
	},
};

export default Banner;