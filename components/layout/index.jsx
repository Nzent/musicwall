// import Navbar from './navbar'
// import Footer from './footer'

import Sidenav from "../sidenav";

export default function Layout({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <Sidenav/>
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}