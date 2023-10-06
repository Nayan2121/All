import React from "react";
import Logo from "../assets/Home/Logo.png"
import { Drop, USD, Homemenu, Shopmenu, Pagesmenu, About, Blog, Contact } from "../components/Dropdown";

export function Navbar() {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex">
                    <Drop />
                    <USD />
                </div>
                <div className="flex justify-between">
                    <div>
                        <a className="py-1.5 px-3 flex items-center " href="#">Help</a>
                    </div>
                    <div>
                        <a className="py-1.5 px-3 flex items-center " href="#">Join Us</a>
                    </div>
                    <div>
                        <a className="py-1.5 px-3 flex items-center " href="#">Sign In</a>
                    </div>
                </div>
            </div>
            <div className="navbar flex">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="flex">
                    <Homemenu/>
                    <Shopmenu/>
                    <Pagesmenu/>
                    <About/>
                    <Blog/>
                    <Contact/>
                </div>
            </div>
        </>
    );
}