import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Importando componentes reutilizáveis
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import Categorias from './pages/Categorias';
import Vencedores from './pages/Vencedores';
import Regulamento from './pages/Regulamento';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';
//import Galeria from './pages/Galeria';



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
          <Route path="/regulamento" element={<Regulamento />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
      <FloatingCTA />
    </Box>
  );
}

export default App;