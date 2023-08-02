import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_yuio_list = createAsyncThunk(
  "yUIOS/api_v1_yuio_list",
  async payload => {
    const response = await apiService.api_v1_yuio_list(payload)
    return response.data
  }
)
export const api_v1_yuio_create = createAsyncThunk(
  "yUIOS/api_v1_yuio_create",
  async payload => {
    const response = await apiService.api_v1_yuio_create(payload)
    return response.data
  }
)
export const api_v1_yuio_retrieve = createAsyncThunk(
  "yUIOS/api_v1_yuio_retrieve",
  async payload => {
    const response = await apiService.api_v1_yuio_retrieve(payload)
    return response.data
  }
)
export const api_v1_yuio_update = createAsyncThunk(
  "yUIOS/api_v1_yuio_update",
  async payload => {
    const response = await apiService.api_v1_yuio_update(payload)
    return response.data
  }
)
export const api_v1_yuio_partial_update = createAsyncThunk(
  "yUIOS/api_v1_yuio_partial_update",
  async payload => {
    const response = await apiService.api_v1_yuio_partial_update(payload)
    return response.data
  }
)
export const api_v1_yuio_destroy = createAsyncThunk(
  "yUIOS/api_v1_yuio_destroy",
  async payload => {
    const response = await apiService.api_v1_yuio_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const yUIOSSlice = createSlice({
  name: "yUIOS",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_yuio_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yuio_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yuio_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yuio_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yuio_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yuio_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_yuio_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_yuio_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_yuio_list,
  api_v1_yuio_create,
  api_v1_yuio_retrieve,
  api_v1_yuio_update,
  api_v1_yuio_partial_update,
  api_v1_yuio_destroy,
  slice: yUIOSSlice
}
