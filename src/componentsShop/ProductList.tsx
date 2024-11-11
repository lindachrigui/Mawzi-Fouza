// CardList.tsx
import React from 'react';
import './ProductList.css';

interface CardProps {
  image: string;
  text: string;
  label: string;
}

const cardsData = [
  { image: 'image1.png', text: 'Card 1', label: 'Label 1' },
  { image: 'image2.png', text: 'Card 2', label: 'Label 2' },
  { image: 'vite.svg', text: 'Card 3', label: 'Label 3' },
  { image: 'image1.png', text: 'Card 1', label: 'Label 1' },
  { image: 'image2.png', text: 'Card 2', label: 'Label 2' },
  // Add more items as needed
];

const title ="Product"

const CardList: React.FC = () => {
  return (
    <div className="ProductList">
      <h1>{title}</h1>
      <div className="card-elements">
        {cardsData.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt="card" />
            <div className="card-content">
              <p>{card.text}</p>
              <div className="card-label">{card.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
