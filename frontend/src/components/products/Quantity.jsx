import React, { useState } from 'react';
import { Button, Text, Group } from '@mantine/core';


export function QuantityInput() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <Group style={{ marginTop: '30px' }}>
        <Button onClick={handleDecrement}>-</Button>
        <Text style={{ fontSize: 18, margin: '0 10px' }}>{count}</Text>
        <Button onClick={handleIncrement}>+</Button>
        <Button><i className="bi bi-cart-fill" style={{ marginRight: '10px' }}></i> ADD TO CART</Button>
      </Group>
    </div >
  );
};
