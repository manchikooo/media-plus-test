import React, {useEffect} from 'react';
import styles from './MediaPlusTest.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    changeHeaderCheckboxAC,
    changeHeaderValueAC, changeImageCheckboxAC, changeImageValueAC,
    changePostTextValueAC,
    changeTitleAC, DataType, getDataFromLocalStorageAC
} from "./redux/settingsReducer";
import {AppRootStateType} from "./redux/store";
import {InputForm} from "./components/InputForm/InputForm";

function MediaPlusTest() {
    const dispatch = useDispatch()


    const allData = useSelector<AppRootStateType, DataType>(state => state.settings)
    let {title, postText, header, image, isHeader, isImage} = allData


    useEffect(() => {
        let dataFromLS = localStorage.getItem('data')
        if (dataFromLS) {
            dispatch(getDataFromLocalStorageAC(JSON.parse(dataFromLS)))
        }
    }, [])

    // accept=".jpg, .jpeg, .png"

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
        dispatch(changeHeaderCheckboxAC())
    }
    const changeImageCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeImageCheckboxAC())
    }
    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(allData))
    }

    return (
        <div className={styles.MediaPlusTestPageStyle}>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsBlock}>
                    <h2>Settings</h2>
                    <InputForm value={title} onChange={titleValueHandler}/>
                    <textarea value={postText} onChange={postTextValueHandler}/>
                    <div>
                        <InputForm type='checkbox' value={isHeader} onChange={changeHeaderCheckbox}/>
                        <span>Header</span>
                    </div>
                    {isHeader && <InputForm value={header} onChange={headerValueHandler}/>}
                    <div>
                        <InputForm type='checkbox' value={isImage} onChange={changeImageCheckbox}/>
                        <span>Image</span>
                    </div>
                    {isImage && <InputForm type='file' onChange={imageValueHandler}/>}
                    <button onClick={saveData}>Save</button>
                </div>
            </div>
            <div className={styles.previewWrapper}>
                <div className={styles.previewBlock}>
                    {isHeader && header}
                    <span>{title}</span>
                    <span>{postText}</span>
                    {isImage && <img src={image} alt='uploaded img'/>}
                </div>
            </div>
        </div>
    );
}

export default MediaPlusTest;
