
import React from 'react';
import { Category } from '@/data/pickupLines';
import { Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@/contexts/AppContext';

interface CategoryCardProps {
  category: Category;
  onUnlockAttempt?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onUnlockAttempt }) => {
  const { unlockedCategories } = useAppContext();
  const isUnlocked = !category.locked || unlockedCategories.includes(category.id);

  if (isUnlocked) {
    return (
      <Link to={`/category/${category.id}`} className="block">
        <div className={`category-card ${category.color} text-white shadow-lg`}>
          <div className="flex flex-col items-center p-3">
            <div className="text-4xl mb-2">{category.emoji}</div>
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm opacity-90">{category.description}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div 
      className="category-card-locked bg-gray-500 text-white shadow-lg cursor-pointer"
      onClick={onUnlockAttempt}
    >
      <div className="flex flex-col items-center p-3 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl">
          <div className="flex flex-col items-center">
            <Lock size={32} className="mb-2" />
            <span className="font-medium">Unlock Content</span>
          </div>
        </div>
        <div className="text-4xl mb-2 opacity-50">{category.emoji}</div>
        <h3 className="text-xl font-bold mb-1 opacity-50">{category.name}</h3>
        <p className="text-sm opacity-40">{category.description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
