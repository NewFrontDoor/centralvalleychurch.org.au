import React from 'react';
import {useHistory} from 'react-router-dom';
import Calendar, {drupalClient} from '@newfrontdoor/calendar';
import {ThemeProvider} from 'theme-ui';
import theme from '../themes/theme';
import config from 'react-global-configuration';

const client = drupalClient(config.get("DRUPAL_EVENTS"))

export default function CalendarWrapper() {
  const history = useHistory();
  function handleNav(url) {
    if (url.indexOf('http') === 0 || url.indexOf('www.') === 0) {
      // Absolutie external urls
      window.location.href = url;
    } else {
      // Relative internal urls
      history.push(url);
    }
  }

  return (
    <section>
          <ThemeProvider theme={theme}>
            <Calendar
              client={client}
              initialView="month"
              handleNav={handleNav}
            />
          </ThemeProvider>
    </section>
  );
}
