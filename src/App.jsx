import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WebsiteAnalysis from './screens/WebsiteAnalysis';

export default function App() {
  console.log('App loaded');
  return (
    <div className="min-h-screen text-gray-900">
      <Routes>
        <Route path="/" element={<WebsiteAnalysis />} />
      </Routes>
    </div>
  );
}