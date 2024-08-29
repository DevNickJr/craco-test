import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import { AuthPovider } from './context/AuthContext';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <AuthPovider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </AuthPovider>
);

export default App;
