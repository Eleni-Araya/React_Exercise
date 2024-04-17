import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import classNames from 'classnames';


import Home from "./pages/Home";
import About from "./pages/about";
import PageNotFound from "./pages/pageNotFound";

import './App.css';

function App() {
    // const changeNavLinkHighlight = (obj: any) => {
    //     const { isActive } = obj
    //     return isActive ? 'nav-link highlighted' : 'nav-link'
    // }
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-3 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">Logo</span>
                </a>
            </header>

            <div className="row justify-content-start">
                <div className="col-3">
                    <div className="d-flex flex-column flex-shrink-0 p-3 border">
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <NavLink to='/Home' className={({ isActive }) => isActive ? 'nav-link highlighted' : 'nav-link'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-link highlighted' : 'nav-link'}>
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-9">
                    <Routes>
                        <Route path="/Home" element={<Home />} ></Route>
                        <Route path="/about" element={<About />} ></Route>
                        <Route path="/" element={<Navigate to="/Home" />}></Route>
                        <Route path="*" element={<PageNotFound />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;



