
import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { PickupLine } from '@/data/pickupLines';
import { ArrowRight, Copy, Heart, Share } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface LineViewerProps {
  lines: PickupLine[];
  currentIndex: number;
  onNext: () => void;
}

const LineViewer: React.FC<LineViewerProps> = ({ lines, currentIndex, onNext }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useAppContext();
  const currentLine = lines[currentIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentLine.text);
    toast({
      title: "Copied!",
      description: "Line copied to clipboard",
    });
  };

  const handleShare = async () => {
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

  return (
    <div className="line-container w-full max-w-md mx-auto">
      <div className="line-text min-h-[100px] flex items-center justify-center">
        {currentLine.text}
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
