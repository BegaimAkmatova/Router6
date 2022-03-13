import { Route, Routes, Navigate } from 'react-router-dom';
import MainHeaders from './components/MainHeaders';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <MainHeaders />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path='/welcome/*' element={<Welcome />} >
              <Route path="new-user" element={<h3>Hello new User!</h3>} />
          </Route>
          <Route path='/products' element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
