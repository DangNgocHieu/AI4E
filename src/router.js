import React from 'react';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';

// import Products from './pages/Products';
import Test from './pages/Test';

import Domain01 from './component/DashBoard/Domain01';
import Newproject from './pages/Newproject';
import Home from './pages/Home';
import User from './pages/User';
// >>>>>>> ce73371ae161eb9b58e0350b8f85652ced8a925e
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
        path : '/Domain',
        exact : false,
        main: ({history}) => <Domain01 history={history}/>
    },

    {
        path: '/Test',
        exact: false,
        main: ({history}) => <Test history={history}/>
    },

    {
        path: '/Newproject',
        exact: false,
        main: ({history}) => <Newproject history={history}/>
    },

    {
        path: '/User',
        exact: false,
        main: ({history}) => <User history={history}/>
    },
];

export default routes;