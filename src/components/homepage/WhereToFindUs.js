/* eslint-disable */
import React, { Component } from 'react';
import GoogleMap from '../models/GoogleMap';


class WhereToFindUs extends Component {
  render() {
    return (
      <section>
        <div className="col-md-4 col-xs-12">
          <div className="region region-content-2-2">
            <div className="block block-block">
            <h2>Where to Find Us</h2>

              <div className="content">
                <GoogleMap id="map_canvas" height="360px" />
                <div><a href="https://goo.gl/maps/F7ziZdrxn8JC1FS9A" target="_blank" rel="noopener noreferrer">Central Valley Church</a></div>
                <div>Sundays 9.30am</div>
                <div>Ripley Valley State Secondary College PAC Hall</div>
                <div>18 Parkway Avenue</div>
                <div>South Ripley QLD 4306</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhereToFindUs;
