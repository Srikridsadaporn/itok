'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import member from './duck/member'
import MemberListComponent from './components/member-list-component'
import MemberViewComponent from './components/member-view-component'
import MemberEditComponent from './components/member-edit-component'
import {Route,} from 'react-router-dom'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);


let store = createStore(combineReducers({
        member, routing: routerReducer
    }
), applyMiddleware(middleware));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div><Route exact path="/member" component={MemberListComponent}/>
                <Route exact path="/member/view" component={MemberViewComponent}/>
                <Route exact path="/member/edit" component={MemberEditComponent}/></div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('memberApp')
);