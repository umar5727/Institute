import {configureStore} from '@reduxjs/toolkit'
import authSlice from './features/authSlice'

 const Store=configureStore({
    reducer: {
        auth : authSlice,
    }
})
export default Store;