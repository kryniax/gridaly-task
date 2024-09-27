import React, { useState, useEffect } from 'react';
import ShareComponent from './components/ShareComponent';

const App: React.FC = () => {
    const [link, setLink] = useState<string>('');
    const [loading, setLoading] = useState(true);

    const fetchRandomUrl = async () => {
        try {
            const response = await fetch('https://enterprise.gridaly.com/frontend/articles.json');
            const data = await response.json();
            const randomUrl = data[Math.floor(Math.random() * data.length)].url;
            setLink(randomUrl);
            setLoading(false);
        } catch (error) {
            console.error('Błąd pobierania danych:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomUrl();
    }, []);

    if (loading) {
        return <div>Ładowanie danych...</div>;
    }

    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
          <ShareComponent link={link} />
      </div>
  </div>
    );
};

export default App
