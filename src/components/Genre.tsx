import { ChangeEventHandler, ReactElement } from "react";
import { IGenre } from "../interfaces";

interface IGenreProps {
    label: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    genres: IGenre[];
    value: string;
}

export function Genre(props: IGenreProps): ReactElement {
    return (
        <div className="select">
            <label className="label" htmlFor={props.label}>
                {props.label}
            </label>
            <select
            className="select-element"
            id={props.label}
            onChange={props.onChange}
            value={props.value}
            >
                <option value="">Genre:</option>
                {props.genres.map((genre) => (
                    <option key={genre.id} value={genre.value}>
                        {genre.label}
                    </option>
                ))}
            </select>
        </div>
    );
}