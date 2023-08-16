import { Route, Routes } from 'react-router-dom'

import Home from '../containers/home'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" exact element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Router
