
import React, { useState } from 'react';
import Header from '@/components/Header';
import AdBanner from '@/components/AdBanner';
import { useAppContext } from '@/contexts/AppContext';
import { formatDistanceToNow } from 'date-fns';
import { Copy, Trash } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const HistoryPage: React.FC = () => {
  const { copyHistory, clearCopyHistory } = useAppContext();
  const [confirmClear, setConfirmClear] = useState(false);

  const handleClear = () => {
    if (!confirmClear) {
      setConfirmClear(true);
      return;
    }
    
    clearCopyHistory();
    setConfirmClear(false);
    
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }
    
    toast({
      title: "History cleared",
      description: "Your copy history has been cleared",
    });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    toast({
      title: "Copied!",
      description: "Line copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Copy History" showBack />
      
      <main className="flex-grow container px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Your copied lines</h2>
            {copyHistory.length > 0 && (
              <button
                onClick={handleClear}
                className={`text-sm px-3 py-1 rounded flex items-center gap-1 ${
                  confirmClear ? 'bg-destructive text-destructive-foreground' : 'hover:bg-secondary'
                }`}
              >
                <Trash size={16} />
                {confirmClear ? 'Confirm' : 'Clear all'}
              </button>
            )}
          </div>
          
          {copyHistory.length > 0 ? (
            <div className="space-y-4">
              {copyHistory.map((item) => (
                <div
                  key={`${item.line.id}-${item.timestamp}`}
                  className="bg-secondary/20 p-4 rounded-lg transition-all hover:bg-secondary/30"
                >
                  <p className="mb-2">{item.line.text}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })}</span>
                    <button
                      onClick={() => handleCopy(item.line.text)}
                      className="p-1 hover:text-foreground flex items-center gap-1"
                    >
                      <Copy size={14} /> Copy again
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>You haven't copied any lines yet</p>
              <p className="text-sm mt-2">
                Copy lines to see them appear here
              </p>
            </div>
          )}
        </div>
      </main>
      
      <AdBanner />
    </div>
  );
};

export default HistoryPage;
