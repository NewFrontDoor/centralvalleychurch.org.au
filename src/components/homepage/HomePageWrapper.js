/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';
import Slider from './Slider';
import Welcome from './Welcome';
import HomePageContent from './HomePageContent';
import Footer from '../Footer';
import NotificationBanner from './NotificationBanner';

class HomePageWrapper extends Component {
  render() {
    return (
      <section>
        <div className="main-wrapper wide">
          <NotificationBanner />
          <Slider />
          <Welcome />
          <HomePageContent />
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
