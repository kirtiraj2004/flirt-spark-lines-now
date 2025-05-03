
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery('');
      setIsExpanded(false);
    }
  };

  return (
    <div className="relative">
      {isExpanded ? (
        <form onSubmit={handleSubmit} className="flex items-center animate-fade-in">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-secondary rounded-l-full px-4 py-2 text-sm w-full focus:outline-none"
            placeholder="Search lines..."
            autoFocus
          />
          <button
            type="submit"
            className="bg-secondary rounded-r-full px-3 py-2"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Open search"
        >
          <Search size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
