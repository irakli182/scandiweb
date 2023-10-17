import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookComponent, FurnitureComponent, DVDComponent } from '../components/Types';
import axios from 'axios';
import "../styles/AddProduct.css"

function AddProduct() {


    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [selectedType, setSelectedType] = useState('DVD');

    const checkForm = () => {
        if (selectedType === "DVD") {
            let sizeMB = document.getElementById("sizeMB").value;
            if (sizeMB === "") {
                return false;
            } 
        }
        if (selectedType === "Furniture") {
            let height = document.getElementById("height").value;
            let width = document.getElementById("width").value;
            let length = document.getElementById("length").value;
            if (height === "" || width === "" || length === "") {
                return false;
            } 
        }
        if (selectedType === "Book") {
            let weight = document.getElementById("weight").value;
            if (weight === "") {
                return false;
            } 
        }
    };

    const saveProduct = async () => {
        const productData = {
          sku,
          name,
          price,
        };
      
        try {
          const response = await axios.post('/api/addProduct', productData);
          console.log(response.data); // Handle the response as needed
        } catch (error) {
          console.error(error);
        }
      };

    const checkInputs = async() => {
        const sku = document.getElementById("sku").value;
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
    
        if (sku === "" || name === "" || price === "" || checkForm() === false) {
            alert("Please fill in all fields");
        } else {saveProduct()}
        
    };



    return (
        <div className='wrapper'>

            <div className='header'>
                <div className='header_text'>
                    <p>Product Add</p>
                </div>
                <div className='header_buttons'>
                    <button className='button' onClick={checkInputs}>Save</button>
                    <Link to="/">
                        <button className='button'>Cancel</button>
                    </Link>
                </div>
            </div>
            
            <form id='product_form'>
                <div>
                    <label htmlFor="sku">SKU:</label>
                    <input
                    type="text"
                    id="sku"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    />
                </div>
            </form>



            <div id='productType'>
                <label>Select Product Type:</label>
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="DVD">DVD</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Book">Book</option>
                </select>

                {selectedType === 'DVD' && <DVDComponent />}
                {selectedType === 'Furniture' && <FurnitureComponent />}
                {selectedType === 'Book' && <BookComponent />}
            </div>
        
            
        </div>
    );
}

export default AddProduct;