/* eslint-disable */
import React, { Component } from 'react';
import headerImg from '../../../assets/img/mainlymusic.png'


class MainlyMusic extends Component {
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
                                                        mainly music is an educational playgroup with a music component that runs during the school term and is for ages from 0 to prep.
                                                        A fun, creative and interactive way for parents and carers to connect with their kids and meet with others in their local area.
                                                    </p>
                                                    <p>
                                                        mainly music meets on Thursdays at 9:30am at Minka Place, Ripley.
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

export default MainlyMusic;
