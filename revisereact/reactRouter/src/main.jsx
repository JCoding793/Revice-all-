import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter , createRoutesFromElements,
  Route, } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/user.jsx'
import Github ,{githubLoader}from './components/Github/Github.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='user/:userid' element={<User />} />
    <Route
     loader={githubLoader}
     path='github' 
     element={<Github />} />
    </Route>
  )

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
