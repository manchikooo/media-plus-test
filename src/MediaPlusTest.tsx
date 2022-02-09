import React, {useEffect} from 'react';
import styles from './MediaPlusTest.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DataType, setDataFromLocalStorageAC} from "./redux/settingsReducer";
import {AppRootStateType} from "./redux/store";
import {Settings} from "./components/SettingsBlock/Settings";

const MediaPlusTest = () => {
    const dispatch = useDispatch()

    const allData = useSelector<AppRootStateType, DataType>(state => state.settings)
    let {title, postText, header, image, isHeader, isImage, isDrag} = allData

    useEffect(() => {
        let dataFromLS = localStorage.getItem('data')
        if (dataFromLS) {
            dispatch(setDataFromLocalStorageAC(JSON.parse(dataFromLS)))
        }
    }, [])

    const classForPreviewBlock = isHeader ? styles.previewBlockWithHeader : styles.previewBlock

    // accept=".jpg, .jpeg, .png"

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
            <div className={styles.previewWrapper}>
                {isHeader && header
                    && <div className={styles.headerElStyle}>
                        <span>{header}</span>
                    </div>}
                <div className={classForPreviewBlock}>
                    <h3>{title}</h3>
                    <p>{postText}</p>
                    {isImage && image
                        && <div className={styles.imageWrapper}>
                            <img className={styles.uploadedImage}  src={image} alt='uploaded img'/>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MediaPlusTest;
