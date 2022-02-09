import React from 'react';
import styles from './Preview.module.css'

type PreviewPropsType = {
    title: string
    postText: string
    header: string
    image: string
    isHeader: boolean
    isImage: boolean
}

export const Preview = (props: PreviewPropsType) => {

    const classForPreviewBlock = props.isHeader ? styles.previewBlockWithHeader : styles.previewBlock

    return (
        <div className={styles.previewWrapper}>
            {
                props.isHeader && props.header
                && <div className={styles.headerElStyle}>
                    <span>{props.header}</span>
                </div>
            }
            <div className={classForPreviewBlock}>
                <h3>{props.title}</h3>
                <p>{props.postText}</p>
                {
                    props.isImage && props.image
                    && <div className={styles.imageWrapper}>
                        <img className={styles.uploadedImage} src={props.image} alt='uploaded img'/>
                    </div>
                }
            </div>
        </div>
    );
};
