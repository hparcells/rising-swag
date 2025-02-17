'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function GoogleAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('G-BC7Q0LC162');
      ReactGA.send({
        hitType: 'pageview',
        page: window.location.pathname
      });
    }
  }, []);

  return null;
}

export default GoogleAnalytics;
