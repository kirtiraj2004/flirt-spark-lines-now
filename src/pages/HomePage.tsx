
import React, { useState } from 'react';
import Header from '@/components/Header';
import CategoryCard from '@/components/CategoryCard';
import AdBanner from '@/components/AdBanner';
import UnlockModal from '@/components/UnlockModal';
import { categories } from '@/data/pickupLines';

const HomePage: React.FC = () => {
  const [unlockModalState, setUnlockModalState] = useState<{
    isOpen: boolean;
    categoryId: string;
    categoryName: string;
  }>({
    isOpen: false,
    categoryId: '',
    categoryName: '',
  });

  const handleUnlockAttempt = (categoryId: string, categoryName: string) => {
    setUnlockModalState({
      isOpen: true,
      categoryId,
      categoryName,
    });
  };

  const closeUnlockModal = () => {
    setUnlockModalState({
      ...unlockModalState,
      isOpen: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container px-4 py-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">Pick a Category</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onUnlockAttempt={() => handleUnlockAttempt(category.id, category.name)}
              />
            ))}
          </div>
        </div>
      </main>
      
      <AdBanner />
      
      <UnlockModal
        categoryId={unlockModalState.categoryId}
        categoryName={unlockModalState.categoryName}
        isOpen={unlockModalState.isOpen}
        onClose={closeUnlockModal}
      />
    </div>
  );
};

export default HomePage;
