import { Route, Routes } from 'react-router-dom';
import './App.css';


import NavBar from './components/NavBar';
import Drafts from './pages/Drafts';

import Compose from './pages/Compose';
import Sent from './pages/Sent';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route exact path='/' element={<Compose/>} /> 
      <Route exact path='/sent' element={<Sent/>} /> 
      <Route exact path='/drafts' element={<Drafts/>} /> 
     </Routes>
    </div>
  );
}

export default App;
