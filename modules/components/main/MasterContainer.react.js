
//Import components react
import React from 'react';
import Reflux from 'reflux';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Cookies from 'react-cookie';
import Is from 'is_js';

//Import recurrents
import PrivateRoute from "../recurrent/PrivateRoute.react";

//Components manually
import Login from "../login/Login.react";
import Panel from "../panel/MainPanel.react";

//Import stores and actions
import SessionStore from "../../stores/user/SessionStore";
import SessionActions from "../../actions/user/SessionActions";

//class
class MasterContainer extends Reflux.Component {
  /*Master Constructor*/
  constructor(props) {
    //Call parent
    super(props);

    //Make Stores

    this.stores = [SessionStore];
  }

  //Component after mount
  componentDidMount() {
    //Cookies
    var acc_one = Cookies.load('access-one');
    var acc_two = Cookies.load('access-two');

    if (Is.not.undefined(acc_one) && Is.not.undefined(acc_two)) {
      //call login again
      SessionActions.logIn(acc_one, acc_two);
    }

  }

  //Render applications
  render() {

    //Return
    return (
      <section className="row sectionAll">


          {/*Routes*/}
          <Route path="/login" component={Login}></Route>

          {/*private routes*/}
          <PrivateRoute path="/" component={Panel}></PrivateRoute>

        {/* </div> */}
      </section>
    );
  }
}


//Export class
export default MasterContainer;
