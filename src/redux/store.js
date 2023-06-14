                      // REDUX С локальным storage
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'         // defaults to localStorage for web
import contactsReduser from '../redux/contactsSlice';
import filterReduser from '../redux/filterSlice'

export const rootReducers = combineReducers({
    contacts: contactsReduser,
    filter: filterReduser
})
                                //whitelist: ['contacts'] - следует применять для сохранения массива
const persistConfig = {
    key: 'phonebook',
    storage,
    whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store)



          // REDUX БЕЗ localstorage
//import { configureStore, combineReducers } from "@reduxjs/toolkit";
//import contactsReduser from '../redux/contactsSlice';
//import filterReduser from '../redux/filterSlice'
//
//export const store = configureStore({
//  reducer: {
//    contacts: contactsReduser,
//    filter: filterReduser
//  },
//})
