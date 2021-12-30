import React from 'react';

export function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
}

export function numberFormat(d) {
  return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function clearURL(url, params) {
  if (!url) {
    return '';
  }

  let getURL = new URL(url);
  let urlSearchParams = getURL.searchParams;

  await params.map((d) => urlSearchParams.delete(d));

  getURL.search = urlSearchParams.toString();

  return getURL.toString();
}
