import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface User {
  id: number;
  name: string;
  favorite: boolean;
}

interface UserState {
  users: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  viewMode: "list" | "grid";
}

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null,
  viewMode: "list",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get("/api/users");
  return res.data as User[];
});

export const toggleFavorite = createAsyncThunk(
  "users/toggleFavorite",
  async (id: number, { getState }) => {
    const state = getState() as { users: UserState };
    const user = state.users.users.find((u) => u.id === id);
    if (!user) throw new Error("User not found");

    const updated = { ...user, favorite: !user.favorite };
    await axios.patch(`/api/users/${id}`, { favorite: updated.favorite });
    return updated;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    switchViewMode(state) {
      state.viewMode = state.viewMode === "list" ? "grid" : "list";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Có lỗi xảy ra";
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const idx = state.users.findIndex((u) => u.id === action.payload.id);
        if (idx >= 0) {
          state.users[idx] = action.payload;
        }
      });
  },
});

export const { switchViewMode } = userSlice.actions;
export default userSlice.reducer;
