import React from 'react';

interface FruitCardProps {
  imgSrc: string;
  altText: string;
}

const FruitCard: React.FC<FruitCardProps> = ({ imgSrc, altText }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt={altText} />
    </div>
  );
};

export default FruitCard;
