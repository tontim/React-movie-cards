import { ChangeEventHandler, ReactElement } from "react";

interface IDescription {
    label: string;
    type: "text";
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
    value: string;
}

export function Description(props: IDescription): ReactElement {
    return (
        <div className="description">
            <label htmlFor="props.label">{props.label}:</label>
            <textarea
                id={props.label}
                onChange={props.onChange}
                value={props.value}
                />
        </div>
    );
}

