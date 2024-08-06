export interface IAddMovie {
    title: string;
    rating: number;
    genre: string;
    description: string;
}

export interface IGenre {
    id: string;
    label: string;
    value: string;
}