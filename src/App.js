import './App.css';
import ListTask from './ListTask';
import { Routes,Route,Link } from 'react-router-dom';
import Add from './Add';

import Search from './Search';
import Edite from './Edite'


function App() {
  return (
    <div className="App">
    <Routes>
    <Route  path='/' element={<div><Search/><Link to={"/Add"}>add</Link><ListTask/> 
    </div>}/>
    <Route  path='/Add' element={<Add/>}/>
    <Route  path='/Edite/:id' element={<Edite/>}/>
   </Routes>
    </div>
  );
}

export default App;
