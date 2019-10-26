import configuration from 'react-global-configuration';

const BASE_URL = "https://api.centralvalleychurch.org.au";

const config = {
    DRUPAL_BASE_URL: BASE_URL,
    DRUPAL_BASE_API_URL: BASE_URL + "/api/views/",
    DRUPAL_WEBFORM_SUBMISSION: BASE_URL + "/webform_submission/submission",
    DRUPAL_EVENTS: BASE_URL + "/api/views/all_events_api"
}

configuration.set(config);

export default config;