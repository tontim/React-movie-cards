import React, { FormEventHandler, useState } from "react";

//import ""./css/Addmovie.css"

function Addmovie() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");

    const handleOnSubmit(): FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log({title, rating, genre, description});

    }
    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <input 
                type="text"
                id="title"
                name="title"
                value={movie.title}
                onChange={handleChange}
                />
            </div>
        </form>
    );
}