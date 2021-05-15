import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistReducer,
    persistStore
} from 'redux-persist';
import reducers from './reducers';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}
//
const middlewares = composeWithDevTools(applyMiddleware(thunk));

//
const persistedReducer = persistReducer(persistConfig, reducers);
//
const store = createStore(persistedReducer,{},middlewares);
const persistor = persistStore(store);


export  {
    store,
    persistor
};