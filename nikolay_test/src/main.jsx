import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from "./redux/store.js";
import { Provider } from 'react-redux'
import { Home } from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login.jsx";
import { Registration } from "./pages/Registration.jsx";
import RecoveryPassword from './pages/RecoveryPassword.jsx'
import { About } from './pages/About.jsx';
import { Account } from './pages/Account.jsx';

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
        element: <About/>,
    },
    {
        path: "/account",
        element: <Account/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
)
