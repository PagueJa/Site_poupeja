import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Graficos from "./components/pages/Graficos";
import Categorias from "./components/pages/Categorias";
import Historico from "./components/pages/Historico";
import EditarPerfil from "./components/pages/EditarPerfil";
import Cadastro from "./components/pages/Cadastro";
import Login from "./components/pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./privateRouter";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Cadastro />} />

        <Route exact path="/login" element={<Login />} />

        <Route exact path="/home" element={<PrivateRoute element={Home} />} />

        <Route
          exact
          path="/graficos"
          element={<PrivateRoute element={Graficos} />}
        />

        <Route
          exact
          path="/categorias"
          element={<PrivateRoute element={Categorias} />}
        />

        <Route
          exact
          path="/historico"
          element={<PrivateRoute element={Historico} />}
        />

        <Route
          exact
          path="/editarperfil"
          element={<PrivateRoute element={EditarPerfil} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
