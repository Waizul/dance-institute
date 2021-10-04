

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Classes from './components/Classes/Classes';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';




function App() {
  return (
		<div>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='/home'>
						<Home></Home>
					</Route>
					<Route path='/classes'>
						<Classes></Classes>
					</Route>
					<Route path='/features'>
						<Features></Features>
					</Route>
					<Route path='/about'>
						<About></About>
					</Route>
					<Route path='*'>
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
  );
}

export default App;
