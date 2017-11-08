
/* Import react components */
import React from 'react';
import { Link } from 'react-router-dom';
/*className*/
class NavMain extends React.Component {
  constructor(props) {
    super(props)
  }

  //Render all app
  render() {

    //Return all html
    return (
      <nav className="left-nav">
        <ul>
          <li><Link to="/analytics">Analytics</Link></li>
          <li><a>Log Out</a></li>

        </ul>
      </nav>

    );
  }
}

//export unique className
export default NavMain;
