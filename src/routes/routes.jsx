import { Route, Routes } from 'react-router-dom'

import ComoFunciona from '../containers/ComoFunciona'
import Home from '../containers/Home'
import Orcamento from '../containers/Orcamento'
import FAQ from '../containers/PerguntasFrequentes'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" exact element={<Home />} />
                <Route path="/orcamento" element={<Orcamento />} />
                <Route path="/como-funciona" element={<ComoFunciona />} />
                <Route path="/perguntas-frequentes" element={<FAQ />} />
            </Route>
        </Routes>
    )
}

export default Router
