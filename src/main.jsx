import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Owner from './pages/Owner';
import Error from './pages/Error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: '/owner',
        element: <Owner />,
        errorElement: <Error />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />

    </React.StrictMode>
)
