
import React from 'react';

// AdMob Banner ID
const ADMOB_BANNER_ID = 'ca-app-pub-7175839283248391/4545465226';

const AdBanner: React.FC = () => {
  return (
    <div className="w-full bg-secondary/50 p-2 text-center text-sm border-t border-border">
      <div className="mx-auto max-w-md">
        {/* AdMob Banner */}
        <p className="text-muted-foreground">Advertisement ID: {ADMOB_BANNER_ID}</p>
      </div>
    </div>
  );
};

export default AdBanner;
