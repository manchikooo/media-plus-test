import React from 'react';
import styles from './Settings.module.css'
import {InputForm} from "../InputForm/InputForm";
import {Button, Switch} from "@mui/material";
import {
    changeHeaderValueAC,
    changeImageValueAC,
    changePostTextValueAC,
    changeTitleAC, DataType, toggleHeaderCheckboxAC, toggleImageCheckboxAC
} from "../../redux/settingsReducer";
import {useDispatch} from "react-redux";

type SettingsPropsType = {
    allData: DataType
    title: string
    header: string
    postText: string
    isHeader: boolean
    isImage: boolean
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
    const changeHeaderCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleHeaderCheckboxAC(e.currentTarget.checked))
    }
    const changeImageCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleImageCheckboxAC(e.currentTarget.checked))
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
                    <Switch checked={props.isHeader} onChange={changeHeaderCheckbox}/>
                    <span>Header</span>
                </div>
                {props.isHeader && <InputForm placeholder='Header'
                                              value={props.header}
                                              onChange={headerValueHandler}
                />}
                <div>
                    <Switch checked={props.isImage} onChange={changeImageCheckbox}/>
                    <span>Image</span>
                </div>
                {props.isImage && <input type='file' onChange={imageValueHandler}/>}
                <Button variant="contained"
                        onClick={saveData}
                        style={{marginTop: '20px'}}
                >
                    Save
                </Button>
            </div>
        </div>
    );
};
