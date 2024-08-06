import { ChangeEventHandler, ReactElement } from "react";

interface IRangeprops {
    label: string;
    max: string;
    min: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
}

export function Range(props: IRangeprops): ReactElement {
    return(
        <div className="range">
            <label className="label"htmlFor={props.label}>
                {props.label}
            </label>
            <div className="range-container">
                <p>{props.min}</p>
                <input
                id={props.label}
                max={props.max}
                min={props.min}
                onChange={props.onChange}
                type="range"
                value={props.value}
            />
            </div>
        </div>
    );
}