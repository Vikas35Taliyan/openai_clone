import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div>
            <div className="nav-container">
                <header>
                    <div>
                        <h4>OpenAI</h4>
                    </div>
                    <div>
                        <ul>
                            <li>
                            <NavLink>
                             Research
                            </NavLink>
                            </li>
                            <li>
                            <NavLink>
                               API 
                            </NavLink>
                            </li>
                            <li>
                            <NavLink>
                                ChatGPT
                            </NavLink>
                            </li>
                            <li>
                            <NavLink>
                                Safety
                            </NavLink>
                            </li>
                            <li>
                            <NavLink>
                                Company
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar;