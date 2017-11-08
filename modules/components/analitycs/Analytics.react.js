//Import react dependencies
import React from 'react';
import Reflux from 'reflux';

//Import actions and stores
import AStore from '../../stores/analytics/AnalyticsStore';
import AActions from '../../actions/analytics/AnalyticsActions';


/* Class */
class Analytics extends Reflux.Component {
  constructor() {
    super();
    //stores
    this.stores = [AStore]
  }

  componentDidMount(){
    //Load analitycs
    AActions.loadAnalytics();
  }

  render() {

    return(
      <div>
        <div id="analytics-runt">

        </div>
      </div>
    )
  }
}

/*Export default*/
export default Analytics;
