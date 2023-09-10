import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import LoaderSpinner from './LoaderSpinner'
export default function Layout () {
    return (
        <>
        <Header />
        {/* <LoaderSpinner /> */}
        <Outlet />
        <Footer />
        </>
    )
}