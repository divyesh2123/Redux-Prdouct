import './App.css';
import ProductDetails from './components/ProductDetails';
import Todo from './components/Todo';
import { Routes, Route, useParams } from 'react-router-dom';
function App() {
  return (

<>
<Routes>
      <Route path="/" element={<Todo></Todo>}/>
      <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}/>
     
    </Routes>


</>   
   
  );
}

export default App;
