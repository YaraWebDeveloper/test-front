

/* Import react components */
import React from 'react';

/*className*/
class HeaderTopMain extends React.Component {
  constructor(props) {
    super(props)
  }

  //Render all app
  render() {

    //Return all html
    return (
        <div className="top_nav">
          <div className="logo-header">
            <img src="src/img/logo.png" />
          </div>
        </div>

    );
  }
}

//export unique className
export default HeaderTopMain;
