/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../../assets/img/Welcome.png'

class WelcomeAbout extends Component {
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
                                                        We are group of ordinary people from all walks of life who are being changed by and through a relationship with Jesus. We meet together on Sundays to hear, explore and unpack what the Bible has to say about life. We love to meet new people who are interested in finding out more about Jesus and would love to welcome you and get to know you.
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

export default WelcomeAbout;
