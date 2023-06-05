import { useState } from 'react';

export const useAddDecrease = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    if(quantity <= 3) {
      setQuantity(quantity + 1);
    } else {
     console.log("¿Para qué tantos pasteles? Gord@ asqueros@");
    }
  };

  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  return {
    quantity,
    increaseQuantity,
    decreaseQuantity,
  };
}