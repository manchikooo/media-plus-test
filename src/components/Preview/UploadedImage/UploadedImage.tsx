import React from 'react';
import styles from './UploadedImage.module.css'

type UploadedImagePropsType = {
    header: string
    image: string
    isHeader: boolean
    isImage: boolean
}

export const UploadedImage = (props: UploadedImagePropsType) => {

    const styleForImage = props.header && props.isHeader ? styles.imageWrapperWithActiveHeader : styles.imageWrapper

    return (
        <>
            {
                props.isImage && props.image
                && <div className={styleForImage}>
                    <img className={styles.uploadedImage} src={props.image} alt='uploaded img'/>
                </div>
            }
        </>
    );
};
