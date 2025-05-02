
import React from 'react';

const AdBanner: React.FC = () => {
  return (
    <div className="w-full bg-secondary/50 p-2 text-center text-sm border-t border-border">
      <div className="mx-auto max-w-md">
        {/* This is where the AdMob Banner would go */}
        <p className="text-muted-foreground">Advertisement</p>
      </div>
    </div>
  );
};

export default AdBanner;
