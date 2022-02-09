import React from 'react';
import {Switch} from "@mui/material";
import {InputForm} from "../../InputForm/InputForm";
import {changeHeaderValueAC, toggleHeaderCheckboxAC} from "../../../redux/settingsReducer";
import {useDispatch} from "react-redux";

type LogicOfHeaderTogglePropsType = {
    header: string
    isHeader: boolean
}

export const LogicOfHeaderToggle = (props: LogicOfHeaderTogglePropsType) => {
    const dispatch = useDispatch()
    const headerValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeHeaderValueAC(e.currentTarget.value))
    }
    const toggleHeaderCheckbox = () => {
        dispatch(toggleHeaderCheckboxAC())
    }
    return (
        <>
            <div>
                <Switch checked={props.isHeader} onChange={toggleHeaderCheckbox}/>
                <span>Header</span>
            </div>
            {
                props.isHeader
                && <InputForm placeholder='Header'
                              value={props.header}
                              onChange={headerValueHandler}
                />
            }
        </>
    )
};
