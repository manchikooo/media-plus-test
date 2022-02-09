import React, {useState} from "react";
import {Alert} from "./Alert";
import {Button} from "@mui/material";

export const useAlert = (alertMessage: string, saveData: () => void) => {
    const [isAlertOn, setAlertOn] = useState<boolean>(false);
    const [alertX, setAlertX] = useState<number>(0);
    const [alertY, setAlertY] = useState<number>(0);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        saveData()
        setAlertX(e.pageX);
        setAlertY(e.pageY);
        setAlertOn(true);
        setTimeout(() => {
            setAlertOn(false);
        }, 2500);
    };

    return (
        <div>
            {isAlertOn ? (
                <Alert
                    alertMessage={alertMessage}
                    alertX={alertX}
                    alertY={alertY}
                />
            ) : null}
            <Button variant="contained"
                    onClick={(e) => handleButtonClick(e)}
                    style={{marginTop: '20px'}}
            >
                Save
            </Button>
        </div>
    );
};