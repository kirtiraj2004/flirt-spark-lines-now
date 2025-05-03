
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import LineViewer from '@/components/LineViewer';
import AdBanner from '@/components/AdBanner';
import { pickupLines, categories } from '@/data/pickupLines';
import { useAppContext } from '@/contexts/AppContext';
import { Filter } from 'lucide-react';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const { viewCount, incrementViewCount, resetViewCount } = useAppContext();

  // Filter lines based on search query and active category filters
  const filteredLines = pickupLines.filter(line => {
    const matchesQuery = line.text.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = activeFilters.length === 0 || activeFilters.includes(line.category);
    return matchesQuery && matchesFilter;
  });

  // Reset current index when search results change
  useEffect(() => {
    setCurrentIndex(0);
  }, [query, activeFilters]);

  const handleNextLine = () => {
    incrementViewCount();
    
    // Show interstitial ad every 8th view (same as category page)
    if (viewCount > 0 && viewCount % 8 === 0) {
      console.log('Showing interstitial ad with ID:', 'ca-app-pub-7175839283248391/7760168965');
      resetViewCount();
    }
    
    // Go to the next line or loop back
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredLines.length);
  };

  const toggleCategoryFilter = (categoryId: string) => {
    setActiveFilters(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title={`Search: ${query}`} showBack />
      
      <main className="flex-grow container px-4 py-6 flex flex-col items-center">
        <div className="w-full max-w-md mb-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {filteredLines.length} {filteredLines.length === 1 ? 'result' : 'results'}
          </p>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1 text-sm px-2 py-1 rounded hover:bg-secondary transition-colors"
          >
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>

        {showFilters && (
          <div className="w-full max-w-md mb-4 p-3 bg-secondary/30 rounded-md animate-fade-in">
            <p className="text-sm font-medium mb-2">Filter by category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategoryFilter(category.id)}
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeFilters.includes(category.id)
                      ? `bg-${category.id} text-white`
                      : 'bg-secondary'
                  }`}
                >
                  {category.emoji} {category.name}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {filteredLines.length > 0 ? (
          <LineViewer
            lines={filteredLines}
            currentIndex={currentIndex}
            onNext={handleNextLine}
          />
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center py-8">
            <p className="text-lg font-medium mb-2">No results found</p>
            <p className="text-sm text-muted-foreground">Try a different search term or remove some filters</p>
          </div>
        )}
      </main>
      
      <AdBanner />
    </div>
  );
};

export default SearchPage;
