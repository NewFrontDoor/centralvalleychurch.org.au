/* eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import OtherPageContent from './OtherPageContent';

import AllSermons from './pages/AllSermons';
import Sermons from './pages/Sermons';
import SermonPage from './pages/SermonPage';
import SermonSeriesPage from './pages/SermonSeriesPage';
import GospelCommunities from './pages/GetInvolved/GospelCommunities';


import OurPeople from './pages/OurPeople';


import ContactUs from './pages/ContactUs';
import PrayerMeetings from './pages/GetInvolved/PrayerMeetings';
import MainlyMusic from './pages/GetInvolved/MainlyMusic';
import LifeCourse from './pages/GetInvolved/LifeCourse';
import Vision from './pages/AboutUs/Vision';
import Team from './pages/AboutUs/Team';
import Mission from './pages/AboutUs/Mission';
import WhatWeBelieve from './pages/AboutUs/WhatWeBelieve';
import VisitUs from './pages/VisitUs';
import WelcomeAbout from './pages/ImNew/WelcomeAbout';
import WhoIsJesus from './pages/ImNew/WhoIsJesus';
import WhyCome from './pages/ImNew/WhyCome';
import GenericAPIPage from './pages/GenericAPIPage';


class OtherPageWrapper extends Component {
  render() {
    return (
      <section>
        <Switch>
          <Route exact path="/AllSermons" component={AllSermons} />
          <Route exact path="/Sermons" component={Sermons} />
          <Route exact path="/sermon/:nid" component={SermonPage} />
          <Route exact path="/sermon/:nid/:title" component={SermonPage} />
          <Route exact path="/series/:nid" component={SermonSeriesPage} />
          <Route exact path="/series/:nid/:title" component={SermonSeriesPage} />

          <Route exact path="/OurPeople" component={OurPeople} />
          <Route exact path="/ContactUs" component={ContactUs} />


          <Route exact path="/VisitUs" component={VisitUs} />

          <Route exact path="/PrayerMeetings" component={PrayerMeetings} />
          <Route exact path="/GospelCommunities" component={GospelCommunities} />
          <Route exact path="/LifeCourse" component={LifeCourse} />

          <Route exact path="/Welcome" component={WelcomeAbout} />
          <Route exact path="/Vision" component={Vision} />
          <Route exact path="/Team" component={Team} />
          <Route exact path="/Mission" component={Mission} />
          <Route exact path="/WhatWeBelieve" component={WhatWeBelieve} />

          <Route exact path="/WhoIsJesus" component={WhoIsJesus} />
          <Route exact path="/WhyCome" component={WhyCome} />
          
          <Route exact path="/:slug" component={GenericAPIPage} />
          <Route path="/*" component={OtherPageContent} />
        </Switch>
      </section>
    );
  }
}

export default OtherPageWrapper;


