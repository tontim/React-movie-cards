import React, { FormEventHandler, ChangeEventHandler, ReactElement, useState,  } from "react";
import { IAddMovie } from "../interfaces";

//import ""./css/Addmovie.css"

export function AddMovie(): ReactElement {

    const [title, setTitle] = useState<string>("");
    const [rating, setRating] = useState<string>("");
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

    return (
        <form className="add-movie" onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleOnChange}
                />
            </div>
            <button type="submit">Add Movie</button>
        </form>
    );
}