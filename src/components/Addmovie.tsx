import { FormEventHandler, ChangeEventHandler, ReactElement, useState,  } from "react";
import { Range } from ".";
import { IAddMovie } from "../interfaces";

import "../css/Addmovie.css"

export function AddMovie(): ReactElement {

    const [title, setTitle] = useState<string>("");
    const [rating, setRating] = useState<string>("1");
    const [genre, setGenre] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log({title, rating, genre, description});
    };

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const {name, value } = e.target;
        switch (name) {
            case "title":
                setTitle(value);
                break;
        }
    };
    //<input label="title" onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
    
    return (
        <form className="add-movie" onSubmit={handleOnSubmit}>
            <div className="container">
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <Range 
                    label="Rating:"
                    max="5"
                    min="1"
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                />

                <button type="reset">Clear</button>
                <button type="submit">Add</button>
            </div>
        </form>
    );
}