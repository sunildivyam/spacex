import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ILaunches } from '../models';

export const configureStore = (preloadedState: any) => {
    const store = createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').reducers;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
