import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/Home.css"


function Home() {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    axios.get('https://irakli-php-api-66869e659c11.herokuapp.com/getProduct.php')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }, []);

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

const handleMassDelete = () => {
  if (selectedItems.length === 0) {
    alert("No items are selected");
    console.log("No items are selected for deletion.");
    return;
  }

  const itemIdsToDelete = selectedItems.map(item => item.id);

  axios.post('https://irakli-php-api-66869e659c11.herokuapp.com/deleteProduct.php', { itemIds: itemIdsToDelete })
    .then(response => {
      console.log("Items deleted successfully.");
      setData(data.filter(item => !itemIdsToDelete.includes(item.id)));
      setSelectedItems([]);
    })
    .catch(error => {
      console.error('Error deleting items:', error);
    });
};
  


  return (
    <div className="wrapper">

        <div className='header'>
            <div className='header_text'>
                <p>Product List</p>
            </div>
            <div className='header_buttons'>
                <Link to="/add-product">
                    <button id='buttonAdd' className='button'>ADD</button>
                </Link>
                <Link>
                  <button id='delete-product-btn' className='button' onClick={handleMassDelete} >MASS DELETE</button>
                </Link>
            </div>
        </div>
        
        <div className='content'>
            <div className="product-grid">
                {data.map((item) => (
                    <div className="product-card" key={item.id}>
                        <div className='checkbox-div'>
                          <input
                              type="checkbox"
                              checked={selectedItems.includes(item)}
                              onChange={() => handleCheckboxChange(item)}
                              className='delete-checkbox'
                          />
                        </div>
                        <div className="product-details">
                            <p>{item.sku}</p>
                            <p>{item.name}</p>
                            <p>{item.price} $</p>
                            {item.size !== null && <p>Size: {parseFloat(item.size)} MB</p>}
                            {item.height !== null && (
                                <p>Dimentions: {parseFloat(item.height)}x{parseFloat(item.width)}x{parseFloat(item.length)} CM</p>
                            )}
                            {item.weight !== null && <p>Weight: {parseFloat(item.weight)} KG</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  );
}

export default Home;