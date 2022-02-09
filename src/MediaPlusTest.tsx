import React, {useEffect} from 'react';
import styles from './MediaPlusTest.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DataType, setDataFromLocalStorageAC} from "./redux/settingsReducer";
import {AppRootStateType} from "./redux/store";
import {Settings} from "./components/SettingsBlock/Settings";
import {Preview} from "./components/Preview/Preview";

export const MediaPlusTest = () => {
    const dispatch = useDispatch()

    const allData = useSelector<AppRootStateType, DataType>(state => state.settings)
    let {title, postText, header, image, isHeader, isImage, isDrag} = allData

    useEffect(() => {
        let dataFromLS = localStorage.getItem('data')
        if (dataFromLS) {
            dispatch(setDataFromLocalStorageAC(JSON.parse(dataFromLS)))
        }
    }, [])

    return (
        <div className={styles.MediaPlusTestPageStyle}>
            <Settings allData={allData}
                      title={title}
                      header={header}
                      postText={postText}
                      isHeader={isHeader}
                      isImage={isImage}
                      isDrag={isDrag}
            />
            <Preview title={title}
                     postText={postText}
                     header={header}
                     image={image}
                     isHeader={isHeader}
                     isImage={isImage}
            />
        </div>
    );
}

