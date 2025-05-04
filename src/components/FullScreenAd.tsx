
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { X } from 'lucide-react';

// AdMob Interstitial ID
const ADMOB_INTERSTITIAL_ID = 'ca-app-pub-7175839283248391/7760168965';

interface FullScreenAdProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenAd: React.FC<FullScreenAdProps> = ({ isOpen, onClose }) => {
  const [adLoaded, setAdLoaded] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5);
  
  useEffect(() => {
    if (!isOpen) return;
    
    // Simulate ad loading
    const loadTimer = setTimeout(() => {
      setAdLoaded(true);
      console.log('Ad loaded with ID:', ADMOB_INTERSTITIAL_ID);
    }, 1000);
    
    return () => clearTimeout(loadTimer);
  }, [isOpen]);
  
  // Countdown timer for the skip button
  useEffect(() => {
    if (!isOpen || !adLoaded || timeRemaining <= 0) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isOpen, adLoaded, timeRemaining]);

  if (!isOpen) return null;
  
  const handleClose = () => {
    toast({
      title: "Ad Closed",
      description: "Thanks for supporting our app!",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black p-4">
      {!adLoaded ? (
        <div className="text-white text-center">
          <div className="animate-pulse mb-4">Loading advertisement...</div>
        </div>
      ) : (
        <>
          <div className="absolute top-4 right-4">
            {timeRemaining > 0 ? (
              <div className="text-white px-3 py-1 rounded-full bg-gray-800">
                Skip in {timeRemaining}
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleClose} 
                className="text-white hover:bg-white/10"
              >
                <X size={24} />
              </Button>
            )}
          </div>
          
          <div className="flex flex-col items-center justify-center h-full max-w-lg w-full">
            <div className="text-2xl font-bold text-white mb-4 text-center">
              SPECIAL OFFER!
            </div>
            <div className="bg-white rounded-lg p-6 w-full text-center">
              <div className="text-xl font-bold mb-2">Premium Pickup Lines</div>
              <div className="text-lg mb-4">Get access to our premium content!</div>
              <div className="text-7xl mb-4">🎁</div>
              <div className="mb-6 text-sm text-gray-600">
                Advertisement ID: {ADMOB_INTERSTITIAL_ID}
              </div>
              {timeRemaining <= 0 && (
                <Button onClick={handleClose} className="w-full">
                  Continue
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FullScreenAd;
