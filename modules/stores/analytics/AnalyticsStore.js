//Import react an reflux components
import React from 'react';
import Reflux from 'reflux';
import Cookie from 'react-cookie';
import {Redirect} from 'react-router-dom';
import Is from 'is_js';

//Import actions
import AnalyticsActions from "../../actions/analytics/AnalyticsActions";

//class
class AnalyticsStore extends Reflux.Store {
  /* Constructor and call parent */
  constructor() {
    //call super
    super();

    //Listenables
    this.listenables = [AnalyticsActions];
  }

  /* On loadAnalytics */
  onLoadAnalytics() {
    //Create analytics

    Highcharts.chart('analytics-runt', {

      title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
      },

      subtitle: {
        text: 'Source: thesolarfoundation.com'
      },

      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },

      series: [
        {
          name: 'Installation',
          data: [
            43934,
            52503,
            57177,
            69658,
            97031,
            119931,
            137133,
            154175
          ]
        }, {
          name: 'Manufacturing',
          data: [
            24916,
            24064,
            29742,
            29851,
            32490,
            30282,
            38121,
            40434
          ]
        }, {
          name: 'Sales & Distribution',
          data: [
            11744,
            17722,
            16005,
            19771,
            20185,
            24377,
            32147,
            39387
          ]
        }, {
          name: 'Project Development',
          data: [
            null,
            null,
            7988,
            12169,
            15112,
            22452,
            34400,
            34227
          ]
        }, {
          name: 'Other',
          data: [
            12908,
            5948,
            8105,
            11248,
            8989,
            11816,
            18274,
            18111
          ]
        }
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }
        ]
      }

    });
  }
}
//export
export default AnalyticsStore;
