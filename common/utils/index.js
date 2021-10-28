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
