import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Album from './components/Album/Album.jsx';
import Photos from './components/Photos/Photos.jsx';
import UserList from './components/User/UserList.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<UserList/>
  },
  {
    path: '/albums/:userId',
    element:<Album/>
  },
  {
    path:'/photos/:albumId',
    element:<Photos/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
