
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! That page doesn't exist.</p>
        <Link to="/" className="px-4 py-2 bg-primary text-white rounded-md">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
