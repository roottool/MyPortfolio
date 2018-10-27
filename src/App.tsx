import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Backdrop from './Components/Backdrop/Backdrop';
import Navbar from './Components/Navbar/Navbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Works from './Pages/Works/Works';

interface ISideDrawerState {
  isOpen: boolean;
}

class App extends React.Component<{}, ISideDrawerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.drawToggleClickHandler = this.drawToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  };

  public render() {
    // let sideDrawer;
    let backDrop;

    if (this.state.isOpen) {
      // sideDrawer = <SideDrawer />;
      backDrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div className="App">
          <Navbar drawToggleClickHandler={this.drawToggleClickHandler} />
          <SideDrawer show={this.state.isOpen} drawToggleClickHandler={this.drawToggleClickHandler} />
          {backDrop}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/skills" component={Skills} />
            <Route path="/" component={Home} />
            <Route component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }

  private drawToggleClickHandler = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };

  private backdropClickHandler = () => {
    this.setState({ isOpen: false });
  };
}

export default App;
