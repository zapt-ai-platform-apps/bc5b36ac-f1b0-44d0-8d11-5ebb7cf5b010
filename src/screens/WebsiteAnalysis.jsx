import React, { useState } from 'react';
import AnalysisForm from '../components/AnalysisForm';
import AnalysisResults from '../components/AnalysisResults';
import MadeOnZAPT from '../components/MadeOnZAPT';
import { analyzeWebsite } from '../services/seoAnalysis';

export default function WebsiteAnalysis() {
  const [results, setResults] = useState({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async ({ url, type }) => {
    console.log('WebsiteAnalysis: Starting analysis for', url, 'with type', type);
    setIsAnalyzing(true);
    setError('');
    setResults({});
    try {
      const response = await analyzeWebsite(url, type);
      console.log('WebsiteAnalysis: Received results', response.data);
      setResults(response.data);
    } catch (err) {
      console.error('WebsiteAnalysis: Error during analysis', err);
      setError('An error occurred during analysis. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Website Analysis Tool</h1>
      </header>
      <main className="flex-grow p-4">
        <AnalysisForm onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <AnalysisResults results={results} />
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Website Analysis Tool</p>
      </footer>
      <MadeOnZAPT />
    </div>
  );
}