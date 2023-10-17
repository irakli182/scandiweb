import React, { useState } from 'react';

export function DVDComponent() {
  const [size, setSize] = useState('');

  return (
    <div>
      <label>Size:</label>
      <input
        type="number"
        id='sizeMB'
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />
      <p>please enter size in MB</p>
    </div>
  );
}

export function FurnitureComponent() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

  return (
    <div>
      <label>Height:</label>
      <input
        type="number"
        value={height}
        id='height'
        onChange={(event) => setHeight(event.target.value)}
      />

      <label>Width:</label>
      <input
        type="number"
        value={width}
        id='width'
        onChange={(event) => setWidth(event.target.value)}
      />

      <label>Length:</label>
      <input
        type="number"
        value={length}
        id='length'
        onChange={(event) => setLength(event.target.value)}
      />
      <p>Please enter dimensions</p>
    </div>
  );
}

export function BookComponent() {
  const [weight, setWeight] = useState('');

  return (
    <div>
      <label>Weight:</label>
      <input
        type="number"
        value={weight}
        id='weight'
        onChange={(event) => setWeight(event.target.value)}
      />
      <p>please enter weight</p>
    </div>
  );
}
