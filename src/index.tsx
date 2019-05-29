import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';
import store from './store/store';
import history from './router/history';
import Landing from './features/landing/landing';
import {RootRoutes} from './router/routes';
import {initializeStorage} from './api/api';

import './styles.scss';
import Dashboard from './features/dashboard/dashboard';

const Root = () => {

    initializeStorage();

    return (
        <Provider store={store}>
            <Router history={history}>
                <div className={'w-100 h-100'}>
                <Switch>
                    <Route exact path={`${RootRoutes.DASHBOARD}/:routePath?`} component={Dashboard}/>
                    <Route path={'/:routePath?'} component={Landing}/>
                </Switch>
                </div>
            </Router>
        </Provider>
    );
};

const mountNode = document.getElementById('root');

ReactDOM.render(<Root/>, mountNode);
