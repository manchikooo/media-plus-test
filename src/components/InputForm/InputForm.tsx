import React from 'react';
import styles from './InputForm.module.css'

type InputFormPropsType = {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

export const InputForm = (props: InputFormPropsType) => {
    return (
        <>
            <input className={styles.InputFormStyle}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={props.onChange}
            />
        </>
    );
};
