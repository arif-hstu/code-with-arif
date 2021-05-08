import { useState, createContext } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

// framer motion configuration
import { AnimatePresence } from 'framer-motion';

import NavBar from './Components/Shared/NavBar/NavBar';
import Home from './Components/Home/Home/Home';
import Expert from './Components/Expert/Expert/Expert';
import Projects from './Components/Projects/Projects/Projects';
import Blog from './Components/Blog/Blog/Blog';
import Contact from './Components/Contact/Contact/Contact';
import Project from './Components/Project/Project';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';

export const ChangeRouteContext = createContext();
export const RouteLocationContext = createContext();
export const MenuOpenContext = createContext();

function App() {
  const [routeLocation, setRouteLocation] = useState('');

  const [isNext, setIsNext] = useState('stable');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function changeRoute(event) {
    let scale = 1;
    let prevScale = scale;
    scale += event.deltaY * -0.01;

    if (prevScale > scale) {
      setIsNext('next');
    } else {
      setIsNext('prev');
    }
  }
  return (
    <div id='App' onWheel={changeRoute} className="App">
      <ChangeRouteContext.Provider value={[isNext, setIsNext]}>
        <RouteLocationContext.Provider value={[routeLocation, setRouteLocation]}>
        <MenuOpenContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
          <Router>
            <NavBar />
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/expertise" component={Expert} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/project/:type/:id" component={Project} />
                    <Route exact path="/project/:type/:id/:details" component={ProjectDetails} />
                  </Switch>
                </AnimatePresence>
              )}
            />
          </Router>
          </MenuOpenContext.Provider>
        </RouteLocationContext.Provider>
      </ChangeRouteContext.Provider>
    </div>
  );
}

export default App;


