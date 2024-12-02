import { createSlice } from "@reduxjs/toolkit"

const starredSlice = createSlice({
    name: 'starred',
    initialState: {
        starredMovies: []
    },
    /**
     * There is common logic in these redicers and those in watchLaterSlice.js
     * Consider placing them in a store utils file.
     */
    reducers: {
        starMovie: (state, action) => {
            state.starredMovies = [action.payload, ...state.starredMovies]
        },
        unstarMovie: (state, action) => {
            const indexOfId = state.starredMovies.findIndex(key => key.id === action.payload.id)
            state.starredMovies.splice(indexOfId, 1)
        },
        clearAllStarred: (state) => {
            state.starredMovies = []
        },
    },
})

export default starredSlice
