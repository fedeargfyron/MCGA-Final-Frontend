import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Screens/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;