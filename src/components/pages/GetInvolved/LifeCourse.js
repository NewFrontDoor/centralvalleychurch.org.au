/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../../assets/img/LifeCourse.png'


class LifeCourse extends Component {
    render() {
        return (
            <section>
                <div id="top-content-region" className="top-content padding-top-15 padding-bottom-15 block-15 bg-color-grayLight1">
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
                                                        The ‘Life’ series is for anyone interested in exploring the meaning of life and the claims made by Jesus in the Bible.
                                                        Everyone is welcome, no matter the age or background. The Life Course includes good food, coffee, a short talk, and the opportunity for discussion and questions – all in a relaxed atmosphere.
                                                        If you want to find out more about Jesus and Christianity, contact us on: <a href="mailto:info@centralvalleychurch.org.au">info@centralvalleychurch.org.au</a> or just come along to our next Sunday meeting.
                                                    </p>


                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>




                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default LifeCourse;
