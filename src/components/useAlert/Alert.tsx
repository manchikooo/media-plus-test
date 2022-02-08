import {useEffect, useRef} from "react";
import styles from './useAlert.module.css'

type AlertPropsType = {
    alertMessage: string
    alertX: number
    alertY: number
}

const Alert = (props: AlertPropsType) => {
    const alert = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log(alert.current?.style);
        console.log(props.alertX, props.alertY);
        alert.current!.style.left = `${props.alertX }px`;
        alert.current!.style.top = `${props.alertY}px`;
    }, [props.alertX, props.alertY]);

    return (
        <div ref={alert} className={styles.alertStyle}>
            {props.alertMessage}
        </div>
    );
};

export default Alert;
