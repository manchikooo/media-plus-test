import React, {useEffect} from 'react';
import styles from './MediaPlusTest.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DataType, setDataFromLocalStorageAC} from "./redux/settingsReducer";
import {AppRootStateType} from "./redux/store";
import {Settings} from "./components/SettingsBlock/Settings";


function MediaPlusTest() {
    const dispatch = useDispatch()

    const allData = useSelector<AppRootStateType, DataType>(state => state.settings)
    let {title, postText, header, image, isHeader, isImage} = allData

    useEffect(() => {
        let dataFromLS = localStorage.getItem('data')
        if (dataFromLS) {
            console.log(dataFromLS)
            dispatch(setDataFromLocalStorageAC(JSON.parse(dataFromLS)))
        }
    }, [])

    // accept=".jpg, .jpeg, .png"

    return (
        <div className={styles.MediaPlusTestPageStyle}>
            <Settings allData={allData}
                      title={title}
                      header={header}
                      postText={postText}
                      isHeader={isHeader}
                      isImage={isImage}
            />
            <div className={styles.previewWrapper}>
                <div className={styles.previewBlock}>
                    {isHeader && header}
                    <span>{title}</span>
                    <span>{postText}</span>
                    {isImage && image && <img src={image} alt='uploaded img'/>}
                </div>
            </div>
        </div>
    );
}

export default MediaPlusTest;
