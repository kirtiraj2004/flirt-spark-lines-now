
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/contexts/AppContext';
import { toast } from '@/components/ui/use-toast';

interface UnlockModalProps {
  categoryId: string;
  categoryName: string;
  isOpen: boolean;
  onClose: () => void;
}

const UnlockModal: React.FC<UnlockModalProps> = ({
  categoryId,
  categoryName,
  isOpen,
  onClose,
}) => {
  const { unlockCategory } = useAppContext();

  if (!isOpen) return null;

  const handleWatchAd = () => {
    // This would normally trigger a rewarded ad
    // For now, we'll just simulate it
    setTimeout(() => {
      unlockCategory(categoryId);
      toast({
        title: "Category Unlocked!",
        description: `You've unlocked the ${categoryName} category`,
      });
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-card text-card-foreground rounded-xl p-6 max-w-sm w-full shadow-xl">
        <h2 className="text-xl font-bold mb-4">Unlock {categoryName} Category</h2>
        <p className="mb-6">Watch a short ad to unlock this category and access all its content.</p>
        
        <div className="flex flex-col gap-3">
          <Button onClick={handleWatchAd} className="bg-primary hover:bg-primary/80">
            Watch Ad to Unlock
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnlockModal;
