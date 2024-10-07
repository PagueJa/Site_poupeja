import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Graficos from './components/pages/Graficos';
import Categorias from './components/pages/Categorias';
import Historico from './components/pages/Historico';

import Container from './components/layout/Container'; // Importa o componente Container

import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>

      <Routes>
        <Route
          exact
          path="/"
          element={
            
              <Home />
            
          }
        />
        <Route
          exact
          path="/graficos"
          element={
            
              <Graficos />
            
          }
        />
        <Route
          exact
          path="/categorias"
          element={
            
              <Categorias />
            
          }
        />
        <Route
          exact
          path="/historico"
          element={
            
              <Historico />
            
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;

