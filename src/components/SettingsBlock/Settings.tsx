import React from 'react';
import styles from './Settings.module.css'
import {InputForm} from "../InputForm/InputForm";
import {Button, Switch} from "@mui/material";
import {
    changeHeaderValueAC,
    changeImageValueAC,
    changePostTextValueAC,
    changeTitleAC,
    DataType, resetDataAC, toggleDragAC,
    toggleHeaderCheckboxAC,
    toggleImageCheckboxAC
} from "../../redux/settingsReducer";
import {useDispatch} from "react-redux";
import {useAlert} from "../useAlert/useAlert";
import {LogicOfHeaderToggle} from "./LogicOfHeaderToggle/LogicOfHeaderToggle";
import {LogicOfImageToggle} from "./LogicOfImageToggle/LogicOfImageToggle";

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

    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(props.allData))
    }
    const resetData = () => dispatch(resetDataAC())

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
                <LogicOfHeaderToggle header={props.header} isHeader={props.isHeader}/>
                <LogicOfImageToggle isImage={props.isImage} isDrag={props.isDrag}/>
                <div className={styles.buttonsBlock}>
                    {useAlert('Post saved', saveData)} {/*вызов хука useAlert. В нем же кнопка SAVE.*/}
                    <Button variant="contained"
                            onClick={resetData}
                            style={{marginTop: '20px'}}
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    );
};
