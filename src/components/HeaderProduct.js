import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css"

function HeaderProduct() {

  return (

        <div className='header'>
            <div className='header_text'>
                <p>Product Add</p>
            </div>
            <div className='header_buttons'>
                <button className='button'>Save</button>
                <Link to="/">
                    <button className='button'>Cancel</button>
                </Link>
            </div>
        </div>
  );
}

export default HeaderProduct;