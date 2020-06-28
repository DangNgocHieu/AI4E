import React from 'react';
import Login from './pages/Login';
import DashBoard from './pages/DashBoard';

// import Products from './pages/Products';
import Test from './pages/Test';

import Domain01 from './component/DashBoard/TrainAttr';
import Upload from './component/Upload';
import Newproject from './pages/Newproject';
import Home from './pages/Home';
import User from './pages/User';
import ModelDetail from './pages/ModelDetail';
import Train from './pages/Train';
import Progress from './pages/Progress';
import Domain from './pages/Domain';
import Recommend from './pages/Recommend';
import Result from './pages/Result';
import TrainAttr from './component/DashBoard/TrainAttr';
const routes = [
    {
        path: '/',
        exact: true,
        main: ({ history }) => <Home history={history} />
    },
    {
        path: '/Login',
        exact: false,
        main: ({ history }) => <Login history={history} />
    },
    {
        path: '/ModelDetail',
        exact: false,
        main: ({ history }) => <ModelDetail history={history} />
    },
    {
        path: '/DashBoard',
        exact: false,
        main: ({ history }) => <DashBoard history={history} />
    },
    {
        path: '/Domain',
        exact: false,
        main: ({ history }) => <Domain history={history} />
    },
    {
        path: '/TrainAttr',
        exact: false,
        main: ({ history }) => <TrainAttr history={history} />
    },

    {
        path: '/Test',
        exact: false,
        main: ({ history }) => <Test history={history} />
    },

    {
        path: '/Newproject',
        exact: false,
        main: ({ history }) => <Newproject history={history} />
    },

    {
        path: '/User',
        exact: false,
        main: ({ history }) => <User history={history} />
    },

    {
        path: '/Train',
        exact: false,
        main: ({ history }) => <Train history={history} />
    },

    {
        path: '/Progress',
        exact: false,
        main: ({ history }) => <Progress history={history} />
    },

    {
        path: '/Upload',
        exact: false,
        main: ({ history }) => <Domain01 history={history} />
    },

    {
        path: '/Recommend',
        exact: false,
        main: ({ history }) => <Recommend history={history} />
    },

    {
        path: '/Result',
        exact: false,
        main: ({ history }) => <Result history={history} />
    },

];

export default routes;