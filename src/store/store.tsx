import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AppState, reducers } from './combine-reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = (preloadedState: AppState) => {
    const store = createStore(
        reducers,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./combine-reducers', () => {
            const nextRootReducer = require('./combine-reducers').reducers;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
