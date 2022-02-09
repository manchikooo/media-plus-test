import React from 'react';
import {Button, Switch} from "@mui/material";
import styles from './LogicOfImageToggle.module.css'
import {changeImageValueAC, toggleDragAC, toggleImageCheckboxAC} from "../../../redux/settingsReducer";
import {useDispatch} from "react-redux";

type LogicOfImageTogglePropsType = {
    isImage: boolean
    isDrag: boolean
}

export const LogicOfImageToggle = (props: LogicOfImageTogglePropsType) => {

    const dispatch = useDispatch()

    const imageValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeImageValueAC(URL.createObjectURL(e.target.files![0])))
    }
    const toggleImageCheckbox = () => {
        dispatch(toggleImageCheckboxAC())
    }
    const toggleDragStartAndOverValue = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(toggleDragAC(true))
    }
    const toggleDragLeaveValue = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(toggleDragAC(false))
    }
    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        dispatch(changeImageValueAC(URL.createObjectURL(e.dataTransfer.files![0])))
        dispatch(toggleDragAC(false))
    }

    return (
        <>
            <div>
                <Switch checked={props.isImage} onChange={toggleImageCheckbox}/>
                <span>Image</span>
            </div>
            {props.isImage && <div className={styles.dropAreaBlock}>
                <Button
                    variant="contained"
                    component="label"
                    style={{marginBottom: '15px'}}
                    size='small'
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                        onChange={imageValueHandler}
                        accept='image/'
                    />
                </Button>
                {props.isDrag
                    ? <div className={styles.dropArea}
                           onDragStart={toggleDragStartAndOverValue}
                           onDragLeave={toggleDragLeaveValue}
                           onDragOver={toggleDragStartAndOverValue}
                           onDrop={onDropHandler}
                    >Release the files to download them
                    </div>
                    : <div className={styles.dropArea}
                           onDragStart={toggleDragStartAndOverValue}
                           onDragLeave={toggleDragLeaveValue}
                           onDragOver={toggleDragStartAndOverValue}
                    >Drag and drop files to upload them
                    </div>
                }
            </div>}
        </>
    );
};
