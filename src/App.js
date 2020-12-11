import React from 'react';
import './App.css';
import Routes from './routes';
import PersistentDrawerLeft from './components/AppDrawer';
function App() {
	return (
		<div className='app'>
			<PersistentDrawerLeft>
				<Routes />
			</PersistentDrawerLeft>
		</div>
	);
}

export default App;
