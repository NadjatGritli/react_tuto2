import { Outlet, NavLink } from "react-router-dom"

const Layout = () => {
    return (
        <div className="main__container">
            <nav>
                <h1>The Ninja Clothing Company</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink >
            </nav>
            <main>
                <div className="sidebar">
                    <ul className='sidebarLinks'>
                        <li>

                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="main_container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
export default Layout