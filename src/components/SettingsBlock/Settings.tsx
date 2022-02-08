import React from 'react';
import styles from './Settings.module.css'
import {InputForm} from "../InputForm/InputForm";
import {Switch} from "@mui/material";
import {
    changeHeaderValueAC,
    changeImageValueAC,
    changePostTextValueAC,
    changeTitleAC,
    DataType, toggleDragAC,
    toggleHeaderCheckboxAC,
    toggleImageCheckboxAC
} from "../../redux/settingsReducer";
import {useDispatch} from "react-redux";
import {useAlert} from "../useAlert/useAlert";

type SettingsPropsType = {
    allData: DataType
    title: string
    header: string
    postText: string
    isHeader: boolean
    isImage: boolean
    isDrag: boolean
}

export const Settings = (props: SettingsPropsType) => {
    let dispatch = useDispatch()

    const titleValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeTitleAC(e.currentTarget.value))
    }
    const postTextValueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changePostTextValueAC(e.currentTarget.value))
    }
    const headerValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeHeaderValueAC(e.currentTarget.value))
    }
    const imageValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeImageValueAC(URL.createObjectURL(e.target.files![0])))
    }
    const toggleHeaderCheckbox = () => {
        dispatch(toggleHeaderCheckboxAC())
    }
    const toggleImageCheckbox = () => {
        dispatch(toggleImageCheckboxAC())
    }
    const toggleDragStartAndOverValue = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(toggleDragAC(true))
    }
    const toggleDragLeaveValue = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(toggleDragAC(false))
    }
    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(changeImageValueAC(URL.createObjectURL(e.dataTransfer.files![0])))
        dispatch(toggleDragAC(false))
    }
    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(props.allData))
    }

    return (
        <div className={styles.settingsWrapper}>
            <div className={styles.settingsBlock}>
                <h2>Settings</h2>
                <InputForm placeholder='Title'
                           value={props.title}
                           onChange={titleValueHandler}
                />
                <textarea className={styles.textareaStyle}
                          placeholder='Some post text'
                          value={props.postText}
                          onChange={postTextValueHandler}/>
                <div>
                    <Switch checked={props.isHeader} onChange={toggleHeaderCheckbox}/>
                    <span>Header</span>
                </div>
                {props.isHeader && <InputForm placeholder='Header'
                                              value={props.header}
                                              onChange={headerValueHandler}
                />}
                <div>
                    <Switch checked={props.isImage} onChange={toggleImageCheckbox}/>
                    <span>Image</span>
                </div>
                {props.isImage && <div className={styles.dropAreaBlock}>
                    <input type='file' onChange={imageValueHandler}/>
                    {props.isDrag
                        ? <div className={styles.dropArea}
                               onDragStart={toggleDragStartAndOverValue}
                               onDragLeave={toggleDragLeaveValue}
                               onDragOver={toggleDragStartAndOverValue}
                               onDrop={onDropHandler}
                        >Отпустите файлы, чтобы загрузить их
                        </div>
                        : <div className={styles.dropArea}
                               onDragStart={toggleDragStartAndOverValue}
                               onDragLeave={toggleDragLeaveValue}
                               onDragOver={toggleDragStartAndOverValue}
                        >Перетащите файлы, чтобы загрузить их
                        </div>
                    }
                </div>}
                <div>
                    {useAlert('Post saved', saveData)} {/*вызов хука useAlert. В нем же кнопка SAVE.*/}
                </div>
            </div>
        </div>
    );
};
