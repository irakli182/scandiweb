import React, { useState } from 'react';

export function DVDComponent() {
  const [size, setSize] = useState('');

  return (
    <div>
      <div className='input-wrapper'>
        <div className='label-div'>
          <label>Size(MB):</label>
        </div>
        <div className='input-div'>
        <input
          className='input'
          type="number"
          id='sizeMB'
          value={size}
          onChange={(event) => setSize(event.target.value)}
        />
        </div>
      </div>
      <p>Please provide size im MB</p>
    </div>
  );
}

export function FurnitureComponent() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

  return (
    <div>

      <div className='input-wrapper'>
        <div className='label-div'>
          <label>Height:</label>
        </div>
        <div className='input-div'>
          <input
            className='input'
            type="number"
            value={height}
            id='height'
            onChange={(event) => setHeight(event.target.value)}
          />
        </div>
      </div>

      <div className='input-wrapper'>
        <div className='label-div'>
          <label>Width:</label>
        </div>
        <div className='input-div'>
          <input
            className='input'
            type="number"
            value={width}
            id='width'
            onChange={(event) => setWidth(event.target.value)}
          />
        </div>
      </div>

      <div className='input-wrapper'>
        <div className='label-div'>
          <label>Length:</label>
        </div>
        <div className='input-div'>
          <input
            className='input'
            type="number"
            value={length}
            id='length'
            onChange={(event) => setLength(event.target.value)}
          />
        </div>
      </div>
      <p>Please provide dimensions</p>
    </div>
  );
}

export function BookComponent() {
  const [weight, setWeight] = useState('');

  return (
    <div>
      <div className='input-wrapper'>
        <div className='label-div'>
          <label>Weigth:</label>
        </div>
        <div className='input-div'>
        <input
          className='input'
          type="number"
          id='weight'
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
        </div>
      </div>
      <p>Please provide weight in KG</p>
    </div>

  );
}
