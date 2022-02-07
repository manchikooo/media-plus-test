import React from 'react';

type InputFormPropsType = {
    value?: any
    onChange: any
    type?: string
}

export const InputForm = (props: InputFormPropsType) => {
    return (
        <>
            <input value={props.value} type={props.type} onChange={props.onChange}/>
        </>
    );
};
