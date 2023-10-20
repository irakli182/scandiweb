import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookComponent, FurnitureComponent, DVDComponent } from '../components/Types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/AddProduct.css"


function AddProduct() {

    let navigate = useNavigate();

    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [selectedType, setSelectedType] = useState('DVD');
    
    const checkForm = () => {
        if (selectedType === "DVD" && !document.getElementById("sizeMB").value) {
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
            data.sizeMB = document.getElementById("sizeMB").value;
        } else if (selectedType === "Furniture") {
            data.height = document.getElementById("height").value;
            data.width = document.getElementById("width").value;
            data.length = document.getElementById("length").value;
        } else if (selectedType === "Book") {
            data.weight = document.getElementById("weight").value;
        }
    
        axios.post('https://scandiwebirakli.000webhostapp.com/addProduct.php', data)
            .then((response) => {
                console.log('Response data:', response.data);
                navigate('/');

            })
            .catch((error) => {
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
                    <Link>
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

            </form>



            <div id='productType'>
                <label>Select Product Type:</label>
                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="DVD">DVD</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Book">Book</option>
                </select>

                <div className='productTypeInputs'>
                    {selectedType === 'DVD' && <DVDComponent />}
                    {selectedType === 'Furniture' && <FurnitureComponent />}
                    {selectedType === 'Book' && <BookComponent />}
                </div>
            </div>
        
            
        </div>
    );
}

export default AddProduct;