import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import { AuthPovider } from './context/AuthContext';

const App = () => (
  <AuthPovider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </AuthPovider>
);

export default App;
