import React, { useState } from 'react';

export default function AnalysisForm({ onAnalyze, isAnalyzing }) {
  const [url, setUrl] = useState('');
  const [analysisType, setAnalysisType] = useState('technical');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('AnalysisForm: Submitted with URL:', url, 'and type:', analysisType);
    if (!url) {
      setError('Please enter a website URL.');
      return;
    }
    setError('');
    onAnalyze({ url, type: analysisType });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="url" className="block font-medium mb-2">Website URL</label>
        <input
          type="url"
          id="url"
          className="w-full p-2 border border-gray-300 box-border"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
        />
      </div>
      <div className="mb-4">
        <span className="block font-medium mb-2">Analysis Type</span>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="analysisType"
              value="technical"
              checked={analysisType === 'technical'}
              onChange={() => setAnalysisType('technical')}
              className="mr-1 cursor-pointer"
            />
            Technical SEO
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="analysisType"
              value="ai"
              checked={analysisType === 'ai'}
              onChange={() => setAnalysisType('ai')}
              className="mr-1 cursor-pointer"
            />
            AI Search Readiness
          </label>
        </div>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        disabled={isAnalyzing}
        className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer disabled:opacity-50"
      >
        {isAnalyzing ? 'Analyzing...' : 'Run Analysis'}
      </button>
    </form>
  );
}