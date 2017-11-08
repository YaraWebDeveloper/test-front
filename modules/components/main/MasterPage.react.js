

//Import react components
import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

//components manually

// import Footer from './FooterMain.react';
import MasterContainer from './MasterContainer.react';

//Create class
class MasterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
            <MasterContainer/>
      </Router>
    )
  }
}

export default MasterPage;
