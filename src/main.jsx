import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom';
// import router from './Router'
import Api from "./pages/api/api.jsx";
import Chatgpt from './pages/chatgpt/chatgpt';
import Safety from './pages/safety/safety';
import Research from './pages/research/research';
import Company from './pages/company/company';
import Layout from './Layout.jsx'

const router = createBrowserRouter (
    [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Safety />
                },
                {
                    path: "company",
                    element: <Company />
                },
                {
                    path: "api",
                    element: <Api />
                },
                {
                    path: "chatgpt",
                    element: <Chatgpt />
                },
                {
                    path: "research",
                    element: <Research />
                },
                                
            ]
        }
    ]
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
