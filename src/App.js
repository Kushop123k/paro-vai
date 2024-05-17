import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>}/>
      
      </Routes>
    </BrowserRouter>
  );
}   

export default App;
