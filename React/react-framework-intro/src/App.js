
import './App.css';
import Info from './components/Info';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import User from './components/User';
import Account from './components/Account';
import Blog from './components/Blog';
function App() {
  return (
    <div>
    <BrowserRouter> 
      <div>
        <Link to="/">Home</Link> |
        <Link to="/account">Account</Link> |
        <Link to="/blog">Blog</Link> |
      </div>
      
      <Routes>
        <Route exact path="/" element={<User/> }/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
        
      
       

    </BrowserRouter>
    </div>
  );
}

export default App;
