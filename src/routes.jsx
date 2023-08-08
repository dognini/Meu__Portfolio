import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Post from './pages/post/post.jsx';
import Menu from './componentes/Menu/Menu';
import Inicio from './pages/Inicio/inicio';
import Rodape from './componentes/Rodape/rodape';
import SobreMim from './pages/sobreMim/sobre-mim';
import ScrollToTop from './componentes/ScrollToTop/scrollToTop';
import NaoEncontrada from './pages/naoEncontrada/naoEncontrada';
import PaginaPadrao from './componentes/pagina-padrao/paginaPadrao';

export default function Rotas() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<SobreMim />} />
        </Route>

        <Route path='posts/:id/*' element={<Post />} />
        <Route path='*' element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}