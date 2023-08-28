import { createSlice } from '@reduxjs/toolkit'
const posts =  []

const postSlice = createSlice({
    name : 'posts',
    initialState : posts, 

    reducers : {
        FETCH_ALL(state,action){
            return action.payload ; 
        }, 
        CREATE(state,action){
            return [...posts , action.payload] ; 
        }
    }
    
})

export const { FETCH_ALL , CREATE } = postSlice.actions ; 
export default postSlice.reducer ;