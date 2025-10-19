// src/App.tsx
import { Authenticator } from '@aws-amplify/ui-react';
import { Scraper } from './components/Scraper'; // <-- Import

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="absolute top-4 right-4">
                <button
                    onClick={signOut}
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                >
                    Sign out
                </button>
            </div>
            <Scraper /> {/* <-- Add component here */}
        </div>
      )}
    </Authenticator>
  );
}

export default App;