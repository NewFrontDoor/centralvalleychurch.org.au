import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

//Change this URL when the API is set up for the new website
const DRUPAL_URL = "https://api.centralvalleychurch.org.au/api/views/";
const DRUPAL_SEARCH_SERMONS = DRUPAL_URL + "all_sermons_api?display_id=services_1&filters";
const DRUPAL_PAGE_API = "https://api.centralvalleychurch.org.au/api/react-pages?slug=";
const DRUPAL_FRONT_PAGE_IMAGE = "https://api.centralvalleychurch.org.au/api/front-page-image"

//Example suffix: all_sermons_api?filters[preacher]=keith&filters[title]=reality

//API uses Services and Services views on the drupal 7 instance

export function getFromDrupalAPI(url, callback) {
  if (url.includes('?')) {
    url += '&display_id=services_1';
  }
  else {
    url += '?display_id=services_1'
  }
  fetch(DRUPAL_URL + url)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function searchDrupalSermons(query, type, callback) {
  fetch(DRUPAL_SEARCH_SERMONS + '[' + type + ']=' + query)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getPageContent(slug, callback) {
  fetch(DRUPAL_PAGE_API + slug)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function getFrontPageImage(callback) {
  fetch(DRUPAL_FRONT_PAGE_IMAGE)
    .then(resp => resp.json())
    .then(function (data) {
      callback(data);
    })
    .catch(function (error) {
      console.log(error);
    })
}