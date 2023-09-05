import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import  Home from './Home'
import Layout from '../components/Layout'
import SelectedCity from '../components/City/SelectedCity'
import { SelectedCityRoute } from './SelectedCityRoute';
const router = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
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
    }
])

export default function AppRouter () {
    return (
        <RouterProvider router={router} />
    )
}

