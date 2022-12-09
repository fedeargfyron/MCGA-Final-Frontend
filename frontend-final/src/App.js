import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import RouteGuard from './Components/RouteGuard';
import SidebarLayout from './Components/SidebarLayout';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Products from './Screens/Products';
import ProductForm from './Screens/ProductForm';

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/" element={<Home />} />
          <Route 
            path="/products" 
            element={
              <RouteGuard>
                <Products />
              </RouteGuard>
            }
          />

          <Route 
            path="/products/form" 
            element= {
                <RouteGuard>
                  <ProductForm />
                </RouteGuard>
            } 
          />
          <Route 
            path="/products/form/:id" 
            element= {
                <RouteGuard>
                  <ProductForm />
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