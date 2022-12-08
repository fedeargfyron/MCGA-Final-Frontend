import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import RouteGuard from './Components/RouteGuard';
import Home from './Screens/Home';
import Login from './Screens/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route 
          path="/" 
          element={
            <RouteGuard>
              <Home />
            </RouteGuard>
          }
        />
        
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;