import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import PageNotFound from "../pages/pageNotFound";

export default [{
    path: '/Home',
    element: <Home />
},
{
    path: '/about',
    element: <About />
},
{
    path: '/',
    element: <Navigate to='/Home' />
},
{
    path: '*',
    element: <PageNotFound />
}
]
