import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import PageNotFound from "../pages/pageNotFound";
import Messages from "../pages/Home-Messages";
import News from "../pages/Home-News";
import MessageDetail from "../pages/MessageDetail";
import NewsDetail from "../pages/NewsDetail";

export default [
    {
        path: '/Home',
        element: <Home />,
        children: [
            {
                path: 'messages',
                element: <Messages />,
                children: [
                    {
                        path: 'detail/:id/:title/:content',
                        element: <MessageDetail />
                    }

                ]
            },
            {
                path: 'news',
                element: <News />,
                children: [
                    {
                        path: 'detail',
                        element: <NewsDetail />
                    }
                ]
            }
        ]
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
