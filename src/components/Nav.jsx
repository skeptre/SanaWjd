import React from 'react';

function Navbar() {
    const navLinks = [
        {href: "#", label: "Home"},
        {href: "#", label: "About"},
        {href: "#", label: "Contact"},
    ];

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start"></div>

            <div className="navbar-center">
                <a href="/" className="text-xl font-bold">
                    Sana Wajid
                </a>
            </div>

            <div className="navbar-end">

                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Dropdown Menu (visible on small screens) */}
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-8 6h8"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
