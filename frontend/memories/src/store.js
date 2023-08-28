import { configureStore } from '@reduxjs/toolkit'
import postReducer from './slice/PostSlice'

export default configureStore({
    reducer : {
        posts : postReducer
    }
})