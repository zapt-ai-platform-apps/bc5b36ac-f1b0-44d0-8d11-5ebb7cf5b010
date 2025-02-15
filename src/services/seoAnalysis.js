import axios from 'axios';

export function analyzeWebsite(url, type) {
  console.log('seoAnalysis: Sending analysis request for', url, 'of type', type);
  return axios.post('/api/analyze', { url, type }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}