import {combineReducers, createStore} from "redux";
import {SettingsReducer} from "./settingsReducer";

const rootReducer = combineReducers({
    settings: SettingsReducer,
})
export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>