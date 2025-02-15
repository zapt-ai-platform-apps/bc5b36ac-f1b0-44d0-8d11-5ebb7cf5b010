import React from 'react';

export default function AnalysisResults({ results }) {
  if (!results || Object.keys(results).length === 0) {
    return <p className="text-center mt-4">No analysis results to display.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      {results.technicalSEO && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Technical SEO Analysis</h2>
          <ul className="list-disc list-inside">
            <li>Page Speed Score: {results.technicalSEO.pageSpeed}</li>
            <li>Broken Links Found: {results.technicalSEO.brokenLinks}</li>
            <li>Missing Schema Elements: {results.technicalSEO.missingSchema}</li>
            <li>Duplicate Content Instances: {results.technicalSEO.duplicateContent}</li>
          </ul>
        </div>
      )}
      {results.aiReadiness && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">AI Search Readiness Analysis</h2>
          <ul className="list-disc list-inside">
            <li>ChatGPT/Bard Optimization: {results.aiReadiness.chatGPTOptimization}</li>
            <li>Voice Search Compatibility: {results.aiReadiness.voiceSearchCompatibility}</li>
            <li>Multimodal Search Optimization: {results.aiReadiness.multimodalSearch}</li>
            <li>Structured Data Validation: {results.aiReadiness.structuredData}</li>
          </ul>
        </div>
      )}
    </div>
  );
}