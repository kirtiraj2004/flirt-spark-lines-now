
import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';

// AdMob Banner ID
const ADMOB_BANNER_ID = 'ca-app-pub-7175839283248391/4545465226';

const AdBanner: React.FC = () => {
  const { adConsent } = useAppContext();
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);

  // Simulate ad loading
  useEffect(() => {
    const loadAd = async () => {
      try {
        setAdLoaded(false);
        setAdError(false);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 10% chance of ad failing to load (for demonstration)
        if (Math.random() < 0.1) {
          throw new Error('Ad failed to load');
        }
        
        setAdLoaded(true);
        console.log('Ad loaded successfully');
      } catch (error) {
        console.error('Ad failed to load:', error);
        setAdError(true);
      }
    };

    loadAd();
    
    // In a real implementation, this would initialize the AdMob SDK
    // and load a real banner ad using something like:
    /*
    document.addEventListener('deviceready', () => {
      if (window.admob) {
        window.admob.banner.config({
          id: ADMOB_BANNER_ID,
          isTesting: false,
          autoShow: true,
          bannerAtTop: false,
          overlap: false,
          offsetTopBar: false,
          size: window.admob.BANNER_SIZE.SMART_BANNER
        });
        window.admob.banner.prepare();
      }
    }, false);
    */

    return () => {
      // In a real implementation, this would clean up the ad
      // window.admob.banner.remove();
    };
  }, [adConsent]);

  return (
    <div className="w-full bg-secondary/50 p-2 text-center text-sm border-t border-border">
      <div className="mx-auto max-w-md min-h-[50px] flex items-center justify-center">
        {adError ? (
          <p className="text-muted-foreground">Ad could not be loaded</p>
        ) : !adLoaded ? (
          <div className="animate-pulse w-full h-12 bg-secondary rounded"></div>
        ) : (
          <div className="w-full">
            {/* This would be replaced by the actual AdMob banner */}
            <p className="text-muted-foreground">Advertisement ID: {ADMOB_BANNER_ID}</p>
            <p className="text-xs text-muted-foreground">
              {adConsent ? "Personalized ads enabled" : "Basic ads only"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdBanner;
