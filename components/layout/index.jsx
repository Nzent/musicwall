import Sidenav from "../sidenav";

export default function Layout({ children }) {
    return (
        <>
            <Sidenav />
            
            <main>
                {children}
            </main>
        </>
    )
}