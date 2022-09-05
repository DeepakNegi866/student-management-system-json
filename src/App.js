import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import AddData from './Component/AddData';
import {Routes,Route} from 'react-router-dom'
import ShowAllData from './Component/ShowAllData';
import EditUser from './Component/EditUser';
import ViewUser from './Component/ViewUser';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddData/>}/>
      <Route path='/showdata' element={<ShowAllData/>}/>
      <Route path='edituser/:id' element={<EditUser/>}/>
      <Route path='viewuser/:id' element={<ViewUser/>}/>
    </Routes>
    
    </>
  );
}

export default App;
