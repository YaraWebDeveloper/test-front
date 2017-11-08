
//Import react dependencies
import React from 'react';

//files manually
import Nav from './NavMain.react';
import HeaderTop from './HeaderTopMain.react';

/* Import Recurrent */
import PrivateRoute from '../recurrent/PrivateRoute.react';

/*Component*/
import Analytics from '../analitycs/Analytics.react.js';

//Class
class MainPanel extends React.Component {
  //main
  constructor(props) {
    //Call parents
    super(props);
  }

  //Render
  render() {

    //Return app
    return (
      <div className="nav-">
            <Nav />
            <HeaderTop/>

            <section className="section-main">
              <PrivateRoute path="/analytics" component={Analytics} />
            </section>

      </div>
    );
  }
}

//Export default
export default MainPanel;
