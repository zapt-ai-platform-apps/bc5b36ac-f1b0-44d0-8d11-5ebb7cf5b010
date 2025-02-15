import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
    
    const { url, type } = req.body;
    if (!url || !type) {
      return res.status(400).json({ error: 'URL and analysis type are required.' });
    }
    
    console.log('api/analyze: Received analysis request for:', url, 'Type:', type);
    
    let results = {};
    
    if (type === 'technical') {
      results = {
        technicalSEO: {
          pageSpeed: Math.floor(Math.random() * 100),
          brokenLinks: Math.floor(Math.random() * 10),
          missingSchema: Math.floor(Math.random() * 5),
          duplicateContent: Math.floor(Math.random() * 3)
        }
      };
    } else if (type === 'ai') {
      results = {
        aiReadiness: {
          chatGPTOptimization: Math.random() > 0.5 ? "Optimized" : "Not Optimized",
          voiceSearchCompatibility: Math.random() > 0.5 ? "Compatible" : "Not Compatible",
          multimodalSearch: Math.random() > 0.5 ? "Optimized" : "Not Optimized",
          structuredData: Math.random() > 0.5 ? "Valid" : "Invalid"
        }
      };
    }
    
    console.log('api/analyze: Analysis results:', results);
    res.status(200).json(results);
  } catch (error) {
    console.error('api/analyze: Error during analysis:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}