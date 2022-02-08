export type DataType = {
    title: string
    postText: string
    header: string
    image: string
    isHeader: boolean
    isImage: boolean
}

let initialState: DataType = {
    title: 'Title',
    postText: 'Some post text',
    header: 'Header',
    image: '',
    isHeader: false,
    isImage: false,
}

export const SettingsReducer = (state: DataType = initialState, action: ActionsType): DataType => {
    switch (action.type) {
        case 'CHANGE-TITLE-VALUE': {
            return {...state, title: action.newTitle}
        }
        case 'CHANGE-POST-TEXT-VALUE': {
            return {...state, postText: action.newPostText}
        }
        case 'CHANGE-HEADER-VALUE': {
            return {...state, header: action.newHeader}
        }
        case 'CHANGE-IMAGE-VALUE': {
            return {...state, image: action.newImage}
        }
        case 'TOGGLE-HEADER-CHECKBOX': {
            return {...state, isHeader: !state.isHeader}
        }
        case 'TOGGLE-IMAGE-CHECKBOX': {
            return {...state, isImage: !state.isImage}
        }
        case 'SET-DATA-FROM-LOCALSTORAGE': {
            return {...state = action.dataFromLS}
        }
        default:
            return state;
    }
}
type ActionsType =
    changeTitleACType
    | changePostTextValueACType
    | toggleHeaderCheckboxACType
    | changeHeaderValueACType
    | toggleImageCheckboxACType
    | changeImageValueACType
    | getDataFromLocalStorageACType

export type changeTitleACType = {
    type: 'CHANGE-TITLE-VALUE',
    newTitle: string
}
export const changeTitleAC = (newTitle: string): changeTitleACType => {
    return {
        type: 'CHANGE-TITLE-VALUE',
        newTitle,
    } as const
}

export type changePostTextValueACType = {
    type: 'CHANGE-POST-TEXT-VALUE',
    newPostText: string,
}
export const changePostTextValueAC = (newPostText: string): changePostTextValueACType => {
    return {
        type: 'CHANGE-POST-TEXT-VALUE',
        newPostText,
    } as const
}

export type changeHeaderValueACType = {
    type: 'CHANGE-HEADER-VALUE',
    newHeader: string,
}
export const changeHeaderValueAC = (newHeader: string): changeHeaderValueACType => {
    return {
        type: 'CHANGE-HEADER-VALUE',
        newHeader,
    } as const
}

export type changeImageValueACType = {
    type: 'CHANGE-IMAGE-VALUE',
    newImage: string,
}
export const changeImageValueAC = (newImage: string): changeImageValueACType => {
    return {
        type: 'CHANGE-IMAGE-VALUE',
        newImage,
    } as const
}

export type toggleHeaderCheckboxACType = {
    type: 'TOGGLE-HEADER-CHECKBOX',
    toggleValue: boolean
}
export const toggleHeaderCheckboxAC = (toggleValue: boolean): toggleHeaderCheckboxACType => {
    return {
        type: 'TOGGLE-HEADER-CHECKBOX',
        toggleValue,
    } as const
}

export type toggleImageCheckboxACType = {
    type: 'TOGGLE-IMAGE-CHECKBOX',
    toggleValue: boolean
}
export const toggleImageCheckboxAC = (toggleValue: boolean): toggleImageCheckboxACType => {
    return {
        type: 'TOGGLE-IMAGE-CHECKBOX',
        toggleValue,
    } as const
}
export type getDataFromLocalStorageACType = {
    type: 'SET-DATA-FROM-LOCALSTORAGE',
    dataFromLS: DataType
}
export const setDataFromLocalStorageAC = (dataFromLS: DataType): getDataFromLocalStorageACType => {
    return {
        type: 'SET-DATA-FROM-LOCALSTORAGE',
        dataFromLS
    } as const
}
