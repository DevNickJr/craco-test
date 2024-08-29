import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const User = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <h1>Welcome, {user?.name}!</h1>
    </div>
  );
};

export default User;
