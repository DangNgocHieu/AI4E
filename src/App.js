import React, {Component, Suspense} from 'react';
import routes from './router';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './i18n';
// import Header from './component/Header';
const Loader = () => (
    <div className="App">
        <div>loading...</div>
    </div>
);
class App extends Component {

    render() {
        return (
            <Suspense fallback={<Loader />}>
                <Router >
                        {this.showContentMenus(routes)}
                </Router>
            </Suspense>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
}


export default App;