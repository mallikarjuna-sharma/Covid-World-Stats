import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/app.jsx";
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/components/reducer/index.jsx'
const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));