import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import  Home from './Home'
import Layout from '../components/Layout'
import SelectedCity from '../components/City/SelectedCity'
import { SelectedCityRoute } from './SelectedCityRoute';
import NotFound from './NotFound';
import Error from './Error';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/city',
                element: <SelectedCityRoute />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default function AppRouter () {
    return (
        <RouterProvider router={router} />
    )
}

