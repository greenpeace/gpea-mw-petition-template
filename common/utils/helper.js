/**
 * Retrieve the form POST URL
 * @return {string} URL
 */
export const getPostURL = () => {
  return document.querySelector('#mc-form').action;
};

/**
 * Retrieve the form Campaign ID
 * @return {string} Campaign ID
 */
export const getCampaignID = () => {
  return document.querySelector('input[name="CampaignId"]').value;
};

/**
 * Send the tracking event to the ga
 * @param  {string} eventLabel The ga trakcing name, normally it will be the short campaign name. ex 2019-plastic_retailer
 * @param  {[type]} eventValue Could be empty
 * @return {[type]}            [description]
 */
export const sendPetitionTracking = (eventLabel, eventValue) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'gaEvent',
    eventCategory: 'petitions',
    eventAction: 'signup',
    eventLabel: eventLabel,
    eventValue: eventValue,
  });

  window.dataLayer.push({
    event: 'fbqEvent',
    contentName: eventLabel,
    contentCategory: 'Petition Signup',
  });
};
