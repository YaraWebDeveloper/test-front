

//Import react an reflux components
import React from 'react';
import Reflux from 'reflux';
import Cookie from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Is from 'is_js';

//Import actions
import SessionActions from "../../actions/user/SessionActions";

//class
class SessionStore extends Reflux.Store {
  /* Constructor and call parent */
  constructor() {
    //call super
    super();

    //Form list
    this.state = {
      isLogged: false,
      userData: {},
      code: 0
    };

    //Listenables
    this.listenables = SessionActions;
  }

  /* funciotn on send login */
  onLogIn(user, pass, highHisotry) {
    //User and pass

    //Inner session init
    this.setState({
      userData: {
        id: 1,
        username: user,
        user: pass,
      },
      isLogged: true
    });

    /* Create cookies| */
    Cookie.save('access-one', user, {
      path: '/',
      expires: new Date(2117, 12, 31, 23, 59, 59)
    });

    Cookie.save('access-two', pass, {
      path: '/',
      expires: new Date(2117, 12, 31, 23, 59, 59)
    });

    //Define
    if (Is.not.undefined(highHisotry)) {
      highHisotry.push('/', {'state': 'new'});
    }

  }

  onLogOut() {

    Cookie.remove('access-one', {path: '/'});
    Cookie.remove('access-two', {path: '/'});

    this.setState({userData: {}, isLogged: false});
  }

}

//Export info react
export default SessionStore;
