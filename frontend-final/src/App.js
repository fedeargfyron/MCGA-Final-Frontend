import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import Aside from './Components/Layout/Aside';
import RouteGuard from './Components/RouteGuard';
import SidebarLayout from './Components/SidebarLayout';
import Home from './Screens/Home';
import Login from './Screens/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route 
            path="/" 
            element={
              <RouteGuard asidebar={<Aside />}>
                <Home />
              </RouteGuard>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;