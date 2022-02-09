import React from 'react';
import styles from './Header.module.css'

type HeaderPropsType = {
    header: string
    isHeader: boolean
}

export const Header = (props: HeaderPropsType) => {
    return (
        <>
            {
                props.isHeader && props.header
                && <div className={styles.headerElStyle}>
                    <span>{props.header}</span>
                </div>
            }
        </>
    );
};
