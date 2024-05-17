import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import Register  from './component/Register';
import Home from './component/Home';
import ViewUser from './component/ViewUser';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import EditUser from './component/EditUser';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Register/>}/>
      <Route path="/view" element={<ViewUser/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>
     
      </Routes>
    </BrowserRouter>
  );
}   

export default App;
