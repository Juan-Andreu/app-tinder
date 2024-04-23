import React from 'react';
import './CardUsuarios.css';

interface CardProps {
  user: {
    id: number;
    name: string;
    age: number;
    imageUrl: string;
    description: string;
    interests: string[];
  };
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const Card: React.FC<CardProps> = ({ user, onSwipeLeft, onSwipeRight }) => {
  const handleSwipeLeft = () => {
    onSwipeLeft();
  };

  const handleSwipeRight = () => {
    onSwipeRight();
  };
  return (
    <div className="card">
      <img src={user.imageUrl} alt={user.name} className="card-image" />
      <div className="card-info">
        <h2>{user.name}, {user.age}</h2>
        <p>{user.description}</p>
        <h3>Interests:</h3>
        <ul>
          {user.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="card-actions">
        <button onClick={handleSwipeLeft} className="button-left">❌</button>
        <button onClick={handleSwipeRight} className="button-right">✔️</button>
      </div>
    </div>
  );
};

export default Card;