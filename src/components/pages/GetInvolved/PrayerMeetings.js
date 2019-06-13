/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../../assets/img/Prayer Meetings.png'

class PrayerMeetings extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content block-15 bg-color-grayLight1">
          <div className="container">
            <div className="row">

              <img className="img img-responsive" src={headerImg} alt="" />
            </div>
          </div>
        </div>
                <div id="content-region">
                    <div className="container">
                        <div className="row">
                            <div id="main-content-region" className="main-content col-xs-12">
                                <div className="region region-content">
                                    <div id="block-system-main" className="block block-system">
                                        <div className="content">
                                            <div className="node node-page clearfix">
                                                <div className="content">

                                                    <p>
                                                        At Central Valley Church we are committed to prayer because we believe that the Christian faith is about a relationship with God.
                                                        Prayer is both a means to deepen this relationship and a means to living out this relationship. We believe that nothing can be done without God and because of His great love for us we want to bring all things to Him.
                                                    </p>
                                                    <p>
                                                        We have two regular prayer meetings. One runs weekly and the other runs monthly.
                                                        If you would like to know more about either of these please contact us at: <a href="mailto:info@centralvalleychurch.org.au">info@centralvalleychurch.org.au</a> or <a href="mailto:mwwoodsell@gmail.com">mwwoodsell@gmail.com</a>
                                                    </p>


                                                </div>



                                            </div>
                                        </div>
                                    </div>  </div>



                            </div>




                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default PrayerMeetings;
