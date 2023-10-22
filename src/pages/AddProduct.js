import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookComponent, FurnitureComponent, DVDComponent } from '../components/Types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/AddProduct.css";



function AddProduct() {


    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [selectedType, setSelectedType] = useState('DVD');
    
    const checkForm = () => {
        if (selectedType === "DVD" && !document.getElementById("size").value) {
            return false;
        }
        if (selectedType === "Furniture" && (!document.getElementById("height").value || !document.getElementById("width").value || !document.getElementById("length").value)) {
            return false;
        }
        if (selectedType === "Book" && !document.getElementById("weight").value) {
            return false;
        }
        return true;
    };
    
    const checkInputs = () => {
        const skuValue = sku;
        const nameValue = name;
        const priceValue = price;
    
        if (!skuValue || !nameValue || !priceValue || !checkForm()) {
            alert("Please fill in all fields");
            return;
        }
        
    
        const data = {
            sku: skuValue,
            name: nameValue,
            price: priceValue,
        };
    
        if (selectedType === "DVD") {
            data.size = document.getElementById("size").value;
        } else if (selectedType === "Furniture") {
            data.height = document.getElementById("height").value;
            data.width = document.getElementById("width").value;
            data.length = document.getElementById("length").value;
        } else if (selectedType === "Book") {
            data.weight = document.getElementById("weight").value;
        }
    
        const url = 'https://irakli-php-api-66869e659c11.herokuapp.com/addProduct.php'; // Replace with your API endpoint

        axios.post(url, data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            // Handle the response from the server
            console.log(response.data);
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
          });
        
    

    };



    return (
        <div className='wrapper'>

            <div className='header'>
                <div className='header_text'>
                    <p>Product Add</p>
                </div>
                <div className='header_buttons'>
                    <Link to="/">
                        <button id='buttonAdd' className='button' onClick={checkInputs}>Save</button>
                    </Link>
                    <Link to="/">
                        <button id='buttonDel' className='button'>Cancel</button>
                    </Link>
                </div>
            </div>


            
            <form id='product_form'>

                <div className='input-wrapper'>  
                    <div className='label-div'>
                        <label htmlFor="sku">SKU:</label>
                    </div>
                    <div className='input-div'>
                        <input
                        type="text"
                        id="sku"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        required
                        className='input'
                        />
                    </div>
                </div>

                <div className='input-wrapper'>  
                    <div className='label-div'>
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className='input-div'>
                        <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='input'
                        />
                    </div>
                </div>

                <div className='input-wrapper'>  
                    <div className='label-div'>
                        <label htmlFor="price">Price:</label>
                    </div>
                    <div className='input-div'>
                        <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className='input'
                        />
                    </div>
                </div>

                <label>Select Product Type:</label>
                <select id='productType' value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="DVD">DVD</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Book">Book</option>
                </select>

                <div className='productTypeInputs'>
                    {selectedType === 'DVD' && <DVDComponent />}
                    {selectedType === 'Furniture' && <FurnitureComponent />}
                    {selectedType === 'Book' && <BookComponent />}
                </div>

            </form>
        </div>
    );
}

export default AddProduct;