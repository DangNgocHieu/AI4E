import React from 'react';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Domain01 from './component/DashBoard/Domain01';
const routes = [
    {
        path: '/',
        exact : true,
        main: ({history}) => <Login history={history}/>
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
];

export default routes;