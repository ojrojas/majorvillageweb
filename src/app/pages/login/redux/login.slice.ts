import { createSlice } from "@reduxjs/toolkit";

interface State {
    loading:boolean;
    user: any;
}

const initialState: State = {
    loading: false,
    user: undefined
}

const LoginSlice = createSlice({
    name: 'login', 
    initialState,
    reducers: {}
})

export default LoginSlice.reducer;