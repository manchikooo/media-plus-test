import React from 'react';
import styles from './Preview.module.css'
import {UploadedImage} from "./UploadedImage/UploadedImage";
import {PreviewInfo} from "./PreviewInfo/PreviewInfo";
import {Header} from "./Header/Header";

type PreviewPropsType = {
    title: string
    postText: string
    header: string
    image: string
    isHeader: boolean
    isImage: boolean
}

export const Preview = (props: PreviewPropsType) => {
    return (
        <div className={styles.previewWrapper}>
            <Header header={props.header}
                    isHeader={props.isHeader}
            />
            <UploadedImage image={props.image}
                           isImage={props.isImage}
                           header={props.header}
                           isHeader={props.isHeader}
            />
            <PreviewInfo title={props.title}
                         postText={props.postText}
                         image={props.image}
                         isImage={props.isImage}
                         header={props.header}
                         isHeader={props.isHeader}
            />
        </div>
    );
};
