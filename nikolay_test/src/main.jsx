import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from "./redux/store.js";
import { Provider } from 'react-redux'
import { Home } from "./pages/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Registration } from "./pages/Registration.jsx";
import RecoveryPassword from './pages/RecoveryPassword.jsx'
import { About } from './pages/About.jsx';
import { Account } from './pages/Account.jsx';
import PrivateRoute from "./components/PrivateRoute.jsx";
import {PostsList} from './pages/PostsList/PostsList.jsx'
import {PostPage} from './pages/PostPage/PostPage.jsx'
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Registration />,
    },
    {
        path: "/recovery-password",
        element: <RecoveryPassword/>,
    },
    {
        path: "/about",
        element: <PrivateRoute element={<About />} />,
    },
    {
        path: "/account",
        element: <PrivateRoute element={<Account />} />,
    },
    {
        path: "/posts",
        element: <PostsList/>,
    },
    {
        path: "/posts-page/:postId",
        element: <PostPage/>,
    },
    {
        path: "/favourites",
        element: <FavouritesPage/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
)
