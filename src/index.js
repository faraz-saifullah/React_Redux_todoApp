import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer'
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)

ReactDOM.render(<Provider store={store}>
<Router 
    history={browserHistory} 
    routes={routes} 
/>
</Provider>
, document.getElementById('root'));
registerServiceWorker();

export default store;
