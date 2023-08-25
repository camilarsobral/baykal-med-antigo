import { Outlet } from 'react-router-dom'

import Nav from '../components/Navigation'
import WhatsApp from '../components/WhatsApp'

function DefaultLayout() {
    return (
        <>
            <Nav />
            <WhatsApp />
            <Outlet />
        </>
    )
}

export default DefaultLayout
