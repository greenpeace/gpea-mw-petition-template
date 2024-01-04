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

export const pushDataLayer = (props) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push(props);
}

export const getUrlParams = () => {
  const { searchParams } = new URL(window.location.href);
  let p = {};
  for (let [k, v] of searchParams.entries()) {
    p[k] = v;
  }
  return p;
};


export const h1Group = (richContent, group) =>{
  const parser = new DOMParser();
  const CHRichHtml = parser.parseFromString(richContent, 'text/html');
  let h1DOM = CHRichHtml.querySelector('h1:not(.raw-html-embed h1)');
  const regex = /group\s([a-zA-Z])/g;
  // console.log('===========',h1DOM)
  let h1Groups = {
    "A": h1DOM
  };
  CHRichHtml.querySelectorAll('.raw-html-embed h1').forEach((el, key)=>{
    const match = regex.exec(el.textContent);
    // console.log('===========',el.textContent,match)
    if(match !== null) {
      h1Groups[match[1].toUpperCase()] = el;
      el.removeAttribute('hidden');
    }
  })
  // if(CHRichHtml.querySelector('h1') )CHRichHtml.querySelector('h1').setAttribute('hidden', '');
  // if(CHRichHtml.querySelector('.raw-html-embed h1')) CHRichHtml.querySelector('.raw-html-embed h1').removeAttribute('hidden');
  if(group && h1Groups[group]){
    h1DOM = h1Groups[group]
  }
  // console.log('===========',h1Groups,h1DOM)
  return new XMLSerializer().serializeToString(h1DOM);
}