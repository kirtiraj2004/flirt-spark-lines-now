
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import LineViewer from '@/components/LineViewer';
import AdBanner from '@/components/AdBanner';
import { pickupLines, categories } from '@/data/pickupLines';
import { useAppContext } from '@/contexts/AppContext';

// AdMob Interstitial ID
const ADMOB_INTERSTITIAL_ID = 'ca-app-pub-7175839283248391/7760168965';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { viewCount, incrementViewCount, resetViewCount } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter lines by category
  const categoryLines = pickupLines.filter(line => line.category === categoryId);
  const category = categories.find(cat => cat.id === categoryId);

  // Handle case where category doesn't exist
  useEffect(() => {
    if (!category || categoryLines.length === 0) {
      navigate('/');
    }
  }, [category, categoryLines, navigate]);

  const handleNextLine = () => {
    incrementViewCount();
    
    // Show interstitial ad every 8th view
    if (viewCount > 0 && viewCount % 8 === 0) {
      // This would normally trigger an AdMob interstitial ad
      console.log('Showing interstitial ad with ID:', ADMOB_INTERSTITIAL_ID);
      resetViewCount();
    }
    
    // Go to the next line or loop back
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryLines.length);
  };

  if (!category || categoryLines.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header title={`${category.emoji} ${category.name}`} showBack />
      
      <main className="flex-grow container px-4 py-6 flex flex-col items-center justify-center">
        {categoryLines.length > 0 && (
          <LineViewer
            lines={categoryLines}
            currentIndex={currentIndex}
            onNext={handleNextLine}
          />
        )}
      </main>
      
      <AdBanner />
    </div>
  );
};

export default CategoryPage;
