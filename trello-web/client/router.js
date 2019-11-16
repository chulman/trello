import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import theme from './components/thema/thema';
import App from './app';

import { MuiThemeProvider } from '@material-ui/core/styles';

const history = createBrowserHistory();

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path="/" render={() => <div>Hello React</div>} />

                    {/* 404 NotFount => Fallback: redirect to default page */}
                    <Redirect path={'/'} to={'/'} />
                </Switch>
            </App>
        </Router>
    </MuiThemeProvider>,
    document.getElementById("root")
);

