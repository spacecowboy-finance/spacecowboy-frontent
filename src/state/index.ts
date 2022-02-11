import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { load, save } from "redux-localstorage-simple"
import user, { initialState as userInitialState } from "./user"
import application from "./application/application"
import { merge } from "lodash"
import transactions from "./transactions/reducer"

const PERSISTED_KEYS: string[] = ["user", "transactions"]
const stateFromStorage = load({
  states: PERSISTED_KEYS,
})
const store = configureStore({
  reducer: {
    application,
    user,
    transactions,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    save({ states: PERSISTED_KEYS }),
  ],
  preloadedState: merge({}, { user: userInitialState }, stateFromStorage),
})

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
