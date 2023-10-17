import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css"

function HeaderMain() {

  return (

        <div className='header'>
            <div className='header_text'>
                <p>Product List</p>
            </div>
            <div className='header_buttons'>
                <Link to="/add-product">
                    <button className='button'>Add</button>
                </Link>
                <button className='button'>Mass Delete</button>
            </div>
        </div>
  );
}

export default HeaderMain;