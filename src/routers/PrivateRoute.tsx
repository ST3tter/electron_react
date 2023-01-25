import { Navigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

//TODO: Add login logic and use the private route in the app router
function PrivateRoute({ children }) {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData({ queryKey: ['user'] });

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
