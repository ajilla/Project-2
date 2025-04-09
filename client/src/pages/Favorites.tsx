import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const res = await axios.get('http://localhost:3001/api/favorites');
      setFavorites(res.data);
    };
    fetchFavorites();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Favorite Cities</h2>
      <ul>
        {favorites.map((city, i) => (
          <li key={i}>{city}</li>
        ))}
      </ul>
    </div>
  );
}