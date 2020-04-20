import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/app.jsx";
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route, Link} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
          </Switch>
    </BrowserRouter>,
    document.getElementById('root'));