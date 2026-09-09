import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignIn from './Modules/SignIn.jsx'
import SignUp from './Modules/SignUp.jsx'
import Courses from './Modules/Courses.jsx'
import Course from './Modules/Course.jsx'
import UserHome from './Modules/UserHome.jsx'
import Root from './Modules/Root.jsx'
import Profile from './Modules/Profile.jsx'
import Donate from './Modules/Donate.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<Root />
  },
  {
    path: "/landing-page",
    element: <App />,
  },
  {
    path: "/home",
    element: <UserHome />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "courses/:courseId",
    element: <Course />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "donate",
    element: <Donate />,
  }
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
