import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Home.css"
import { Link } from 'react-router-dom';


function Home() {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    axios.get('https://scandiwebirakli.000webhostapp.com/getProduct.php')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  
  const handleCheckboxChange = (item) => {
    // Toggle the selected state of the item
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleMassDelete = () => {
    if (selectedItems.length > 0) {
      // Log the selected items
      console.log("Selected items to delete:", selectedItems);
    const itemIdsToDelete = selectedItems.map(item => item.id);

    // Send a request to the backend to delete the selected items
    axios.post('https://scandiwebirakli.000webhostapp.com/deleteProduct.php', { itemIds: itemIdsToDelete })
      .then(response => {
        // Handle a successful deletion
        console.log("Items deleted successfully.");
        
        // Remove the deleted items from the data state
        setData(data.filter(item => !itemIdsToDelete.includes(item.id)));

        // Clear the selected items
        setSelectedItems([]);
      })
      .catch(error => {
        console.error('Error deleting items:', error);
      });

    } else {
      alert("no item is selected")
      console.log("No items are selected for deletion.");
    }
  };
  


  return (
    <div className="wrapper">

        <div className='header'>
            <div className='header_text'>
                <p>Product List</p>
            </div>
            <div className='header_buttons'>
                <Link to="/add-product">
                    <button id='buttonAdd' className='button'>Add</button>
                </Link>
                <Link>
                  <button id='buttonDel' className='button' onClick={handleMassDelete} >Mass Delete</button>
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
                            {item.sizeMB !== null && <p>Size: {parseFloat(item.sizeMB)} MB</p>}
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
