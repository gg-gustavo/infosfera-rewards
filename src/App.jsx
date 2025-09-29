import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Importando componentes reutilizáveis
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Vencedores from './pages/Vencedores';
//import Galeria from './pages/Galeria';
//import Contato from './pages/Contato';



function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          {/* APENAS A ROTA HOME ESTÁ ATIVA */}
          <Route path="/" element={<Home />} />
          
          
          <Route path="/categorias" element={<Categorias />}/>
          <Route path="/vencedores" element={<Vencedores />} />
          {/* <Route path="/galeria" element={<Galeria />} /> */}
          {/* <Route path="/contato" element={<Contato />} /> */}
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;