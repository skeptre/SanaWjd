import {Routes, Route} from 'react-router';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Maintenance from './components/Maintenance.jsx';

const App = () => {
	const isProduction = import.meta.env.MODE === 'production';

	if (isProduction) {
		return <Maintenance/>;
	}

	return (
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/aboutme" element={<AboutMe/>}/>
		</Routes>
	);
};

export default App;
