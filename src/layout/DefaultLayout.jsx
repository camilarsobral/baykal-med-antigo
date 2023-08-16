import { Outlet } from 'react-router-dom'

import Nav from '../components/Navigation'

function DefaultLayout() {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

export default DefaultLayout
