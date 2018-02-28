import React from 'react';
import {render} from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';
import GridMenu from '../src/components/Menu'
import registerServiceWorker from './registerServiceWorker';

const router = (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={hashHistory}>
            <Route path='/'>
                <Route path='/list' component={ App }></Route>
                <Route path='/gridmenu' component={ GridMenu }></Route>
                <IndexRedirect to = '/list' />
            </Route>
        </Router>
    </ MuiThemeProvider>
)

render(router, document.getElementById('root'));
registerServiceWorker();