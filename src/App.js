import './App.css';
import AddProduct from './pages/AddProduct';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/add-product' Component={AddProduct}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
