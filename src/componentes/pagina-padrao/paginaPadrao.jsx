import { Outlet } from 'react-router-dom';
import Banner from '../Banner/banner.jsx';

export default function PaginaPadrao() {
    return (
        <main>
            <Banner/>
            <Outlet/>  {/* renderiza os conteudos das rotas */}
        </main>
    )
}