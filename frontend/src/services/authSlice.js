import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { login , logout as logoutAPI } from "./authService";


// Async login
export const loginUser = createAsyncThunk(
    "auth/loginUser" ,
    async (userData , {rejectWithValue}) => {
        try {
            const response = await login(userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

// Async logout 
export const logoutUser = createAsyncThunk(
    "auth/logoutUser" ,
    async (_ , {rejectWithValue}) => {
        try {
            await logoutAPI();
            return true;
        }catch(error) {
            return rejectWithValue(error.response?.data || "Logout failed");
        }
    } 
);

const initialState = {
    user: null ,
    token : localStorage.getItem("token") || null ,
    loading : false ,
    error : null ,
};



const authSlice = createSlice({
    name: "auth" ,
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder    
            // login
            .addCase(loginUser.pending , (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(loginUser.fulfilled , (state , action) => {
                state.loading = false;

                state.user = action.payload.user;
                state.token = action.payload.token;
                
                localStorage.setItem("token" , action.payload.token);
                localStorage.setItem("user" , JSON.stringify(action.payload.user));
            })

            .addCase(loginUser.rejected , (state , action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(logoutUser.fulfilled , (state) => {
                state.user = null;
                state.error = null;
                state.token = null;

                localStorage.removeItem("token");
                localStorage.removeItem("user");
            });
    } ,
});

export default authSlice.reducer;