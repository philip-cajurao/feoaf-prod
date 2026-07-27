'use client'

import ReactDOM from 'react-dom'

export default function PreResources() {
  ReactDOM.preconnect('https://api.leadconnectorhq.com');
  ReactDOM.prefetchDNS('https://api.leadconnectorhq.com');

  return null;
}