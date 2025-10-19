// src/components/Scraper.tsx
import { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { scrapeTournament } from '../graphql/mutations';
import { DataSync } from '../API';

const client = generateClient();

export const Scraper = () => {
  const [url, setUrl] = useState('');
  const [venueId, setVenueId] = useState(''); // In a real app, this would be a dropdown
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DataSync | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScrape = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    if (!url || !venueId) {
        setError("URL and Venue ID are required.");
        setLoading(false);
        return;
    }

    try {
      const response = await client.graphql({
        query: scrapeTournament,
        variables: {
          url: url,
          venueId: venueId,
        }
      });
      console.log('Success:', response);
      setResult(response.data.scrapeTournament as DataSync);
    } catch (err: any) {
      console.error('Error scraping:', err);
      setError(err.errors ? err.errors[0].message : 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Scrape New Tournament</h2>
      <form onSubmit={handleScrape} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">Tournament URL</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="[https://kingsroom.com.au/](https://kingsroom.com.au/)..."
          />
        </div>
        <div>
          <label htmlFor="venueId" className="block text-sm font-medium text-gray-700">Venue ID</label>
          <input
            type="text"
            id="venueId"
            value={venueId}
            onChange={(e) => setVenueId(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter a valid Venue ID"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
        >
          {loading ? 'Scraping...' : 'Scrape'}
        </button>
      </form>
      {error && <div className="mt-4 text-red-600 bg-red-100 p-3 rounded-md">{error}</div>}
      {result && (
        <div className="mt-4 text-green-700 bg-green-100 p-3 rounded-md">
          <p>Success! Sync record created:</p>
          <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
