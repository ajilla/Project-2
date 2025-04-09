import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city) navigate(`/weather/${city}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Weather Dashboard</h1>
      <input
        type="text"
        placeholder="Enter city"
        className="border p-2 mr-2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2">Search</button>
    </div>
  );
}