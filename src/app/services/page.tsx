import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Services | Future Entrepreneurs Of America Foundation',
  description: '...',
}

export default function Services() {
  return (
    <div className='p-10 grid grid-cols-2 gap-10'>
      <div>Program</div>
      <div>Creating New Business</div>
      <div>Planning on how to market your products/services</div>
      <div>Present your business to real investors</div>
    </div>
  );
}
