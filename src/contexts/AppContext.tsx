
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PickupLine } from '@/data/pickupLines';

type ThemeType = 'light' | 'dark';

interface LineRating {
  lineId: string;
  rating: number;
  timestamp: number;
}

interface CopyHistoryItem {
  line: PickupLine;
  timestamp: number;
}

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
  ratings: LineRating[];
  ratePickupLine: (lineId: string, rating: number) => void;
  getLineRating: (lineId: string) => number;
  copyHistory: CopyHistoryItem[];
  addToCopyHistory: (line: PickupLine) => void;
  clearCopyHistory: () => void;
  adConsent: boolean;
  setAdConsent: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const [favorites, setFavorites] = useState<PickupLine[]>([]);
  const [viewCount, setViewCount] = useState<number>(0);
  const [unlockedCategories, setUnlockedCategories] = useState<string[]>([]);
  const [ratings, setRatings] = useState<LineRating[]>([]);
  const [copyHistory, setCopyHistory] = useState<CopyHistoryItem[]>([]);
  const [adConsent, setAdConsent] = useState<boolean>(false);

  // Load saved state from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    const savedFavorites = localStorage.getItem('favorites');
    const savedUnlockedCategories = localStorage.getItem('unlockedCategories');
    const savedRatings = localStorage.getItem('ratings');
    const savedCopyHistory = localStorage.getItem('copyHistory');
    const savedAdConsent = localStorage.getItem('adConsent');

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

    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }

    if (savedCopyHistory) {
      setCopyHistory(JSON.parse(savedCopyHistory));
    }

    if (savedAdConsent) {
      setAdConsent(JSON.parse(savedAdConsent));
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('unlockedCategories', JSON.stringify(unlockedCategories));
    localStorage.setItem('ratings', JSON.stringify(ratings));
    localStorage.setItem('copyHistory', JSON.stringify(copyHistory));
    localStorage.setItem('adConsent', JSON.stringify(adConsent));
  }, [theme, favorites, unlockedCategories, ratings, copyHistory, adConsent]);

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

  const ratePickupLine = (lineId: string, rating: number) => {
    setRatings(prevRatings => {
      // Remove existing rating for this line if it exists
      const filteredRatings = prevRatings.filter(item => item.lineId !== lineId);
      
      // Add new rating
      return [...filteredRatings, {
        lineId,
        rating,
        timestamp: Date.now()
      }];
    });
  };

  const getLineRating = (lineId: string): number => {
    const foundRating = ratings.find(item => item.lineId === lineId);
    return foundRating ? foundRating.rating : 0;
  };

  const addToCopyHistory = (line: PickupLine) => {
    setCopyHistory(prevHistory => {
      // Remove duplicates of this line if they exist
      const filteredHistory = prevHistory.filter(item => item.line.id !== line.id);
      
      // Add to beginning of history
      return [{
        line,
        timestamp: Date.now()
      }, ...filteredHistory];
    });
  };

  const clearCopyHistory = () => {
    setCopyHistory([]);
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
        unlockCategory,
        ratings,
        ratePickupLine,
        getLineRating,
        copyHistory,
        addToCopyHistory,
        clearCopyHistory,
        adConsent,
        setAdConsent
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
