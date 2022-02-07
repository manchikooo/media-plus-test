import React, {useEffect, useState} from 'react';
import styles from './MediaPlusTest.module.css'

function MediaPlusTest() {

    useEffect(() => {
        let titleValue = localStorage.getItem('titleValue')
        titleValue && setTitleValue(titleValue)
    }, [])

// accept=".jpg, .jpeg, .png"
    const [titleValue, setTitleValue] = useState<string>('')
    const [postTextValue, setPostTextValue] = useState<string>('')
    const [headerValue, setHeaderValue] = useState<string>('Header')
    const [isHeader, setIsHeader] = useState<boolean>(false)
    const [isImage, setIsImage] = useState<boolean>(false)
    const [image, setImage] = useState<string>()


    const titleValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => setTitleValue(e.currentTarget.value)
    const postTextValueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPostTextValue(e.currentTarget.value)
    const headerValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => setHeaderValue(e.currentTarget.value)
    const headerCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => setIsHeader(e.currentTarget.checked)
    const imageCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => setIsImage(e.currentTarget.checked)
    const saveData = () => {
        localStorage.setItem('titleValue', titleValue)
    }
    const resetData = () => {
        setTitleValue('')
    }

    const handlerIMG = (event: any) => {
        console.log(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div className={styles.MediaPlusTestPageStyle}>
            <div className={styles.settingsWrapper}>
                <div className={styles.settingsBlock}>
                    <h2>Settings</h2>
                    <input value={titleValue} onChange={titleValueHandler}/>
                    <textarea value={postTextValue} onChange={postTextValueHandler}/>
                    <div>
                        <input type='checkbox' checked={isHeader} onChange={headerCheckbox}/>
                        <span>Header</span>
                    </div>
                    {isHeader && <input value={headerValue} onChange={headerValueHandler}/>}
                    <div>
                        <input type='checkbox' checked={isImage} onChange={imageCheckbox}/>
                        <span>Image</span>
                    </div>
                    {isImage && <input type='file' onChange={handlerIMG}/>}
                    <button onClick={saveData}>Save</button>
                    <button onClick={resetData}>Reset</button>
                </div>
            </div>
            <div className={styles.previewWrapper}>
                <div className={styles.previewBlock}>
                    {isHeader && headerValue}
                    {titleValue}
                    {postTextValue}
                    {isImage && <img src={image}/>}
                </div>
            </div>
        </div>
    );
}

export default MediaPlusTest;
