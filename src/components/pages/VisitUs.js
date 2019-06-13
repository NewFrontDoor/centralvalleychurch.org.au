/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../assets/img/Visit Us.png';

class VisitUs extends Component {
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
                            We love seeing people from all walks of life come and learn more about Jesus. On Sundays we gather together as one church family to really hear, explore and unpack what the bible has to say about life.
                            It is a great time of encouragement and challenge. We also respond together by singing, praying and spending quality time together and getting to know one another more deeply.
                            We want to be a church community that understands both the joys and struggles of life and how Jesus can make a most profound impact.
                            We believe that the life we can have in Jesus is not about information or religious actions but about transformation. Jesus changes lives.
                          </p>

                          <p>
                            Our service includes Valley Kids - a time specially for kids to learn about the bible. We welcome families and our aim is to see people from all walks of life coming together to understand who God is,
                            what He’s done for us and what He continues to do from the Bible. We invite both the skeptic and the searcher and our hope is that any person would find us a welcoming and safe environment to explore the claims of Christianity.
                          </p>

                          <p>
                            Our services are currently held each Sunday at Minka Place (20 Main Street, Ripley QLD 4036) at 10:00am. If you would like more information please contact us on: <a href="mailto:info@centralvalleychurch.org.au"></a>
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

export default VisitUs;
