import React, { Component } from 'react';
import { getPageContent } from '../../utils/fetchJSON';


class GenericAPIPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: null,
            slug: this.props.match.params.slug,
            pageExists: false,
            loading: true
        }
    }

    componentWillMount() {
        var that = this;

        getPageContent(this.state.slug, function (data) {
            that.setState({ pages: data, loading: false });
            data.length > 0 ? that.setState({ pageExists: true }) : that.setState({ pageExists: false });
        });
    }

    render() {
        var pageHeader = "";
        var content = "";
        var page = null;
        if (this.state.pages !== null && this.state.pages.length > 0) {
            //page exists
            page = this.state.pages[0];
            pageHeader = page.header_image ? <img className="img img-responsive" src={page.header_image} alt="" ></img> : (
                <section>
                    <div id="top-content-left-region" className="padding-top-15 padding-bottom-15 top-content-left col-xs-12 col-md-6 text-center-sm">
                        <div id="page-title-block" className="page-title block">
                            <h1>{page.title}</h1>
                        </div>
                    </div>

                    <div id="top-content-right-region" className=" padding-top-15 top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                        <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                            {page.breadcrumbs ? <div className="breadcrumbs" dangerouslySetInnerHTML={{ __html: page.breadcrumbs }} /> : <div className="breadcrumbs"><a href="/">Home</a></div>}
                        </div>
                    </div>
                </section>);
            content = page.content;
        }
        else if (this.state.pages !== null) {
            //no page
            content = <p>Sorry this page is still under construction or does not exist.</p>
            pageHeader = (<React.Fragment><div id="top-content-left-region" className="padding-top-15 padding-bottom-15 top-content-left col-xs-12 col-md-6 text-center-sm">
                <div id="page-title-block" className="page-title block">
                    <h1>Page not found</h1>
                </div>
                </div>
                <div id="top-content-right-region" className=" padding-top-15 top-content-right col-xs-12 col-md-6 text-right text-center-sm">
                <div id="page-breadcrumbs-block" className="page-breadcrumbs block">
                    <div className="breadcrumbs"><a href="/">Home</a></div>
                </div>
            </div></React.Fragment>)
            console.log(this.state);
        }
        else {
            //loading
            content = <p>Loading...</p>
        }
        return (
            <section>
                <div id="top-content-region" className="top-content block-15 bg-color-grayLight1">
                    <div className="container">
                        <div className="row">
                            {pageHeader}
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

                                            {this.state.loading === false && this.state.pageExists ? <div className="content" dangerouslySetInnerHTML={{ __html: content }}></div> : ''}
                                            {this.state.loading === true ? <div className="content">Loading</div> : ''}
                                            {this.state.loading === false && this.state.pageExists === false ? <div className="contetnt">{content}</div> : ''}

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

export default GenericAPIPage;