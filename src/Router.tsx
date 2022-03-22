import { Navigate, useRoutes } from 'react-router-dom'
import { Dashboard, Help, Home, Login, Poll, Register } from 'components/pages'
import { Loader } from 'components/atoms'

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/',
          element: <Navigate to='/dashboard' replace />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/encuesta',
          element: <Poll />,
        },
        {
          path: '/ayuda',
          element: <Help />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/registro',
      element: <Register />,
    },
    { path: 'loading', element: <Loader /> },
    {
      path: '/404',
      element: <p>not found</p>,
    },
  ])
}

export default Router
