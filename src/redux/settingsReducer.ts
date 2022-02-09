export type DataType = {
    title: string
    postText: string
    header: string
    image: string
    isHeader: boolean
    isImage: boolean
    isDrag: boolean
}

let initialState: DataType = {
    title: 'Title',
    postText: 'Some post text',
    header: 'Header',
    image: '',
    isHeader: false,
    isImage: false,
    isDrag: false,
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
        case 'TOGGLE-DRAG-VALUE': {
            return {...state, isDrag: action.isDragValue}
        }
        case 'SET-DATA-FROM-LOCALSTORAGE': {
            return {...state = action.dataFromLS}
        }
        case 'RESET-DATA': {
            return {
                ...state,
                title: '',
                postText: '',
                header: '',
                image: '',
            }
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
    | toggleDragACType
    | resetDataACType

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
}
export const toggleHeaderCheckboxAC = (): toggleHeaderCheckboxACType => {
    return {
        type: 'TOGGLE-HEADER-CHECKBOX',
    } as const
}

export type toggleImageCheckboxACType = {
    type: 'TOGGLE-IMAGE-CHECKBOX',
}
export const toggleImageCheckboxAC = (): toggleImageCheckboxACType => {
    return {
        type: 'TOGGLE-IMAGE-CHECKBOX',
    } as const
}
export type toggleDragACType = {
    type: 'TOGGLE-DRAG-VALUE',
    isDragValue: boolean,
}
export const toggleDragAC = (isDragValue: boolean): toggleDragACType => {
    return {
        type: 'TOGGLE-DRAG-VALUE',
        isDragValue
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

export type resetDataACType = {
    type: 'RESET-DATA',
}
export const resetDataAC = (): resetDataACType => {
    return {
        type: 'RESET-DATA',
    } as const
}
