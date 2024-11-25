/* eslint-disable */
import React, { Component } from "react";
import _ from "lodash";
import { getFrontPageImage } from "../../utils/fetchJSON";

import slider1 from "../../assets/img/central_valley_background.png";

const WithLink = ({ link, children }) => (link ? <a href={link}>{children}</a> : children);

class Slider extends Component {
	constructor() {
		super();
		this.state = {
			image: null,
			loading: true,
			url: null
		};
	}
	componentWillMount() {
		var that = this;
		getFrontPageImage((data) => {
			if (data?.length > 1 && data[0].image) {
				const { url, image } = data[0];

				const hasUrl = url.indexOf("http") >= 0;
				const newState = {
					image: image,
					loading: false,
					url: hasUrl ? url : null
				};

				that.setState(newState);
			} else {
				that.setState({ image: slider1, loading: false, url: null });
			}
		});
	}
	render() {
		return (
			<section>
				<div id="highlighted-2-region" className="highlighted region-0 block-0 bg-color-grayLight1 text-color-light">
					<div className="region region-highlighted-2">
						<div id="block-views-front-page-slider-block" className="block block-views">
							<div className="content">
								{!this.state.loading ? (
									<WithLink link={this.state.url} target="_blank">
										<img className="img-full-width img-responsive" src={this.state.image} alt="" />
									</WithLink>
								) : (
									<i className="fa fa-spinner"></i>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Slider;
