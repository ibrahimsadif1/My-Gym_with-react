import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { path: "/", name: "Home", id: 1 },
        { path: "/about", name: "About", id: 2 },
        { path: "/services", name: "Services", id: 3 },
        { path: "/contact", name: "Contact", id: 4 },
        { path: "*", name: "NotFound", id: 5 }
    ];



    return (
        <nav>
            <div className="md:hidden text-xl px-4 bg-rose-500" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose>
                    :<AiOutlineMenu className="" ></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex gap-8 duration-1000 absolute md:static
            ${open === true ? 'top-5' : '-top-60'}
            bg-rose-500 rounded-lg md:rounded-none px-3 ml-4 md:ml-0 py-4`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;