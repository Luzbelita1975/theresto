import React from 'react'
import { FeatureContainer, FeatureButton } from './Feature';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Menu of the Day</h1>
      <p>Pizza Truffle alfredo sauce topped with 24 carat gold dust</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
