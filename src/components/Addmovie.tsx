import { FormEventHandler, ChangeEventHandler, ReactElement, useState,  } from "react";
import { Range, Genre, Description } from ".";
import { genres } from "../data/data";
import { IAddMovie } from "../interfaces";
 
import "../css/Addmovie.css"

export function AddMovie(): ReactElement {

    const [title, setTitle] = useState<string>("");
    const [rating, setRating] = useState<string>("1");
    const [genre, setGenre] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log({title, rating, genre, description});
    };
    
    const handleClear = () => {
        setTitle("");
        setRating("1");
        setGenre("");
        setDescription("");
    }

    return (
        <form className="add-movie" onSubmit={handleSubmit}>
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
                <Genre 
                    label="Genre"
                    onChange={(e) => setGenre(e.target.value)}
                    genres={genres}
                    value={genre}
                    />
                <Description
                    label="Description"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <button type="button" onClick={handleClear}>Clear</button>
                <button type="submit">Add</button>
            </div>
        </form>
    );
}