
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PickupLine } from '@/data/pickupLines';

type ThemeType = 'light' | 'dark';

interface AppContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  favorites: PickupLine[];
  addToFavorites: (line: PickupLine) => void;
  removeFromFavorites: (lineId: string) => void;
  isFavorite: (lineId: string) => boolean;
  viewCount: number;
  incrementViewCount: () => void;
  resetViewCount: () => void;
  unlockedCategories: string[];
  unlockCategory: (categoryId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [favorites, setFavorites] = useState<PickupLine[]>([]);
  const [viewCount, setViewCount] = useState<number>(0);
  const [unlockedCategories, setUnlockedCategories] = useState<string[]>([]);

  // Load saved state from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    const savedFavorites = localStorage.getItem('favorites');
    const savedUnlockedCategories = localStorage.getItem('unlockedCategories');

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to dark theme
      document.documentElement.classList.add('dark');
    }

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    if (savedUnlockedCategories) {
      setUnlockedCategories(JSON.parse(savedUnlockedCategories));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('unlockedCategories', JSON.stringify(unlockedCategories));
  }, [theme, favorites, unlockedCategories]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const addToFavorites = (line: PickupLine) => {
    if (!favorites.some(fav => fav.id === line.id)) {
      setFavorites([...favorites, line]);
    }
  };

  const removeFromFavorites = (lineId: string) => {
    setFavorites(favorites.filter(line => line.id !== lineId));
  };

  const isFavorite = (lineId: string) => {
    return favorites.some(line => line.id === lineId);
  };

  const incrementViewCount = () => {
    setViewCount(prevCount => prevCount + 1);
  };

  const resetViewCount = () => {
    setViewCount(0);
  };

  const unlockCategory = (categoryId: string) => {
    if (!unlockedCategories.includes(categoryId)) {
      setUnlockedCategories([...unlockedCategories, categoryId]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        viewCount,
        incrementViewCount,
        resetViewCount,
        unlockedCategories,
        unlockCategory
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
