
import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { PickupLine } from '@/data/pickupLines';
import { ArrowRight, Copy, Heart, Share, Star } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface LineViewerProps {
  lines: PickupLine[];
  currentIndex: number;
  onNext: () => void;
}

const LineViewer: React.FC<LineViewerProps> = ({ lines, currentIndex, onNext }) => {
  const { 
    addToFavorites, 
    removeFromFavorites, 
    isFavorite, 
    addToCopyHistory,
    ratePickupLine,
    getLineRating
  } = useAppContext();
  
  const currentLine = lines[currentIndex];
  const currentRating = getLineRating(currentLine.id);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentLine.text);
    addToCopyHistory(currentLine);
    
    // Provide haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    toast({
      title: "Copied!",
      description: "Line copied to clipboard",
    });
  };

  const handleShare = async () => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Flirt Lines',
          text: currentLine.text,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      handleCopy();
      toast({
        title: "No Share API",
        description: "Line copied to clipboard instead",
      });
    }
  };

  const handleFavorite = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    if (isFavorite(currentLine.id)) {
      removeFromFavorites(currentLine.id);
      toast({
        title: "Removed",
        description: "Line removed from favorites",
      });
    } else {
      addToFavorites(currentLine);
      toast({
        title: "Saved",
        description: "Line added to favorites",
      });
    }
  };

  const handleRating = (rating: number) => {
    if (navigator.vibrate) {
      navigator.vibrate([30, 30, 30]);
    }
    
    ratePickupLine(currentLine.id, rating);
    toast({
      title: "Rated!",
      description: `You rated this line ${rating} stars`,
    });
  };

  return (
    <div className="line-container w-full max-w-md mx-auto">
      <div className="line-text min-h-[100px] flex items-center justify-center">
        {currentLine.text}
      </div>
      
      {/* Star Rating */}
      <div className="flex justify-center gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            className="transition-transform hover:scale-110"
            aria-label={`Rate ${star} stars`}
          >
            <Star
              size={20}
              className={star <= currentRating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}
            />
          </button>
        ))}
      </div>
      
      <div className="flex justify-center gap-8">
        <button
          onClick={handleCopy}
          className="action-button hover:bg-secondary"
          aria-label="Copy"
        >
          <Copy size={24} />
          <span className="text-xs">Copy</span>
        </button>
        <button
          onClick={handleFavorite}
          className={`action-button ${isFavorite(currentLine.id) ? 'text-red-500' : 'hover:bg-secondary'}`}
          aria-label="Favorite"
        >
          <Heart size={24} fill={isFavorite(currentLine.id) ? "currentColor" : "none"} />
          <span className="text-xs">Save</span>
        </button>
        <button
          onClick={handleShare}
          className="action-button hover:bg-secondary"
          aria-label="Share"
        >
          <Share size={24} />
          <span className="text-xs">Share</span>
        </button>
        <button
          onClick={onNext}
          className="action-button bg-primary text-white hover:bg-primary/80"
          aria-label="Next"
        >
          <ArrowRight size={24} />
          <span className="text-xs">Next</span>
        </button>
      </div>
    </div>
  );
};

export default LineViewer;
