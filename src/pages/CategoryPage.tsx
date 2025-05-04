
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import LineViewer from '@/components/LineViewer';
import AdBanner from '@/components/AdBanner';
import FullScreenAd from '@/components/FullScreenAd';
import { pickupLines, categories } from '@/data/pickupLines';
import { useAppContext } from '@/contexts/AppContext';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { viewCount, incrementViewCount, resetViewCount, unlockedCategories } = useAppContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreenAd, setShowFullScreenAd] = useState(false);
  
  // Filter lines by category
  const categoryLines = pickupLines.filter(line => line.category === categoryId);
  const category = categories.find(cat => cat.id === categoryId);

  // Check if this is a locked category that hasn't been unlocked
  useEffect(() => {
    if (category?.locked && !unlockedCategories.includes(category.id)) {
      navigate('/');
    }
  }, [category, unlockedCategories, navigate]);
  
  // Handle case where category doesn't exist
  useEffect(() => {
    if (!category || categoryLines.length === 0) {
      navigate('/');
    }
  }, [category, categoryLines, navigate]);
  
  // Random ad display chance
  useEffect(() => {
    if (!category) return;
    
    // Check if we should show a full-screen ad (random chance)
    // Show ad with a random chance between lines 3-5
    const randomCheck = () => {
      const randomNum = Math.floor(Math.random() * 3) + 3; // Random number between 3-5
      if (currentIndex > 0 && currentIndex % randomNum === 0) {
        setShowFullScreenAd(true);
      }
    };
    
    randomCheck();
  }, [currentIndex, category]);

  const handleNextLine = () => {
    incrementViewCount();
    
    // Show interstitial ad every 8th view
    if (viewCount > 0 && viewCount % 8 === 0) {
      console.log('View count trigger for interstitial ad');
      resetViewCount();
    }
    
    // Go to the next line or loop back
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryLines.length);
  };

  const handleAdClose = () => {
    setShowFullScreenAd(false);
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
      
      <FullScreenAd isOpen={showFullScreenAd} onClose={handleAdClose} />
    </div>
  );
};

export default CategoryPage;
