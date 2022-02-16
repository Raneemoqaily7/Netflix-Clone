import logo from './logo.svg';
import './App.css';

import { Form } from 'react-bootstrap';
import Home from './components/Home/Home'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
     
      <Routes>
        <Route path='/'  element={<Home/>}/>
      </Routes>
     

    </div>
    
    
  );
}

export default App;
