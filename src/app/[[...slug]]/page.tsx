'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import '../../lib/amplifyClient'; 

const App = dynamic(() => import('../../App'), { ssr: false })

export default function Page() {
  return <App />
}
