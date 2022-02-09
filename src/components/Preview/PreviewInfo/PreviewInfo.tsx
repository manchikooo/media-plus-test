import React from 'react';
import styles from './PreviewInfo.module.css'

type PreviewInfoPropsType = {
    title: string
    image: string
    postText: string
    isImage: boolean
    header: string
    isHeader: boolean
}

export const PreviewInfo = (props: PreviewInfoPropsType) => {

    // eslint-disable-next-line no-mixed-operators
    const styleForPreviewInfo = props.image && props.isImage || props.header && props.isHeader ? styles.previewBlockWithActiveImage : styles.previewBlock

    return (
        <div className={styleForPreviewInfo}>
            <h3>{props.title}</h3>
            <p>{props.postText}</p>
        </div>
    );
};
