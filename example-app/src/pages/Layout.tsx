import { NavLink, Outlet } from "react-router-dom";

export default function Layout () {



    return (

        <>
            <header>
                <nav>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/counter'>Counter</NavLink>
                </nav>

            </header>

            <main>
                <Outlet/>
            </main>
        </>
    )
}