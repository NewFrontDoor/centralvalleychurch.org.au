/* eslint-disable */
import React, { Component } from 'react';
import _ from 'lodash';
import { decode } from 'he';

import { getFromDrupalAPI } from '../../utils/fetchJSON';


class UpcomingEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { events: null }
  }

  componentWillMount() {
    var that = this;
    getFromDrupalAPI('upcoming_events_api', function (data) {
      that.setState({ events: data })
    });
  }
  render() {

    var upcomingEvents = <div>Loading, please wait...</div>;
    if (this.state.events && this.state.events.length > 0) {
      upcomingEvents = _.map(this.state.events, (event) => {
        return (
          <div key={_.uniqueId()} className="upcoming-event">
            <div><i className="icon ion-calendar upcoming-event-icon" /></div>
            <div className="upcoming-event-title">{decode(event.title)}</div>
            <div className="upcoming-event-date">{event.dateonly === "true" ? event.startdate.slice(0, event.startdate.length - 7) : event.startdate}</div>
          </div>
        )
      });
    }

  else if (this.state.events){
    upcomingEvents = <span>No upcoming events to display</span>
  }

    return (
      <section>
        <div className="col-md-4 col-xs-12">  <div className="region region-content-2-3">

          <div className="block block-block">

            <h2 className="header-lightBlue">Upcoming Events</h2>

            <div className="content">
              <div className="upcoming-events">
                {upcomingEvents}
              </div>
              <p>For a full list of our events, <a href="/Events" title="View full calendar">click here</a>.</p>
            </div>
          </div>
        </div>
        </div>

      </section>
    );
  }
}

export default UpcomingEvents;
