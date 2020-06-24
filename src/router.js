import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Products from './pages/Products';
import Test from './pages/Test';
const routes = [
    {
        path: '/',
        exact : true,
        main: ({history}) => <Home history={history}/>
    },
    {
        path: '/Login',
        exact : false,
        main: ({history}) => <Login history={history}/>
    },
    {
        path: '/DashBoard',
        exact : false,
        main: ({history}) => <DashBoard history={history}/>
    },
    {
        path : '/Products',
        exact : false,
        main: ({history}) => <Products history={history}/>
    },

    {
        path: '/Test',
        exact: false,
        main: ({history}) => <Test history={history}/>
    },
];

export default routes;