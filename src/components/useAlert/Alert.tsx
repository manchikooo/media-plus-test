import {useEffect, useRef} from "react";
import styles from './useAlert.module.css'

type AlertPropsType = {
    alertMessage: string
    alertX: number
    alertY: number
}

export const Alert = (props: AlertPropsType) => {
    const alert = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log(alert.current?.style);
        console.log(props.alertX, props.alertY);
        alert.current!.style.left = `${props.alertX / 2}px`;
        alert.current!.style.top = `${props.alertY + 40}px`;
    }, [props.alertX, props.alertY]);

    return (
        <div ref={alert} className={styles.alertStyle}>
            {props.alertMessage}
        </div>
    );
};

