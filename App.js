import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Nav from './components/nav';
function App() {
  return (
       <Router>
       <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/nav' element={<Nav/>}/>
     </Routes>
      </Router>
  );
}

export default App