import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Graficos from './components/pages/Graficos';
import Categorias from './components/pages/Categorias';
import Historico from './components/pages/Historico';

import Container from './components/layout/Container'; // Importa o componente Container
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Container customClass= "min-height">
              <Home />
            </Container>
          }
        />
        <Route
          exact
          path="/graficos"
          element={
            <Container customClass= "min-height">
              <Graficos />
            </Container>
          }
        />
        <Route
          exact
          path="/categorias"
          element={
            <Container customClass= "min-height">
              <Categorias />
            </Container>
          }
        />
        <Route
          exact
          path="/historico"
          element={
            <Container customClass= "min-height">
              <Historico />
            </Container>
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

