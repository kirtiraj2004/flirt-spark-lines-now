
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AdBanner from '@/components/AdBanner';
import { useAppContext } from '@/contexts/AppContext';
import { Copy, Heart, Trash } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FavoritesPage: React.FC = () => {
  const { favorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Line copied to clipboard",
    });
  };

  const handleRemove = (id: string) => {
    removeFromFavorites(id);
    toast({
      title: "Removed",
      description: "Line removed from favorites",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Saved Lines" showBack />
      
      <main className="flex-grow container px-4 py-6">
        <div className="max-w-xl mx-auto">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart size={48} className="mx-auto mb-4 opacity-30" />
              <h2 className="text-xl font-semibold mb-2">No saved lines yet</h2>
              <p className="text-muted-foreground mb-6">
                Heart your favorite lines to see them here
              </p>
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-primary text-white rounded-md"
              >
                Browse Categories
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Your Saved Lines</h2>
              {favorites.map((line) => (
                <div key={line.id} className="bg-card rounded-lg p-4 shadow-sm">
                  <p className="mb-3">{line.text}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground capitalize">
                      {line.category}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCopy(line.text)}
                        className="p-2 rounded-full hover:bg-secondary"
                        aria-label="Copy"
                      >
                        <Copy size={18} />
                      </button>
                      <button
                        onClick={() => handleRemove(line.id)}
                        className="p-2 rounded-full hover:bg-secondary text-red-500"
                        aria-label="Remove"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <AdBanner />
    </div>
  );
};

export default FavoritesPage;
