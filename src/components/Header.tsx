
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBack = false }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSearch = location.pathname === '/search';

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          {showBack && (
            <Link to="/" className="mr-3 p-2">
              ← Back
            </Link>
          )}
          <h1 className={`font-bold ${isHome ? 'text-2xl' : 'text-xl'}`}>
            {title || 'Flirt Lines'}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {!isSearch && <SearchBar />}
          <Link to="/favorites" className="p-2 rounded-full hover:bg-secondary transition-colors">
            Saved
          </Link>
          <Link to="/history" className="p-2 rounded-full hover:bg-secondary transition-colors">
            History
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
