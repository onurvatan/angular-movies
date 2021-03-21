export interface movieCreateDto{
    title:string,
    summary:string,
    poster:File;
    inTheaters:boolean,
    releaseDate:Date,
    trailer:string,
    genresIds:number[],
    movieTheaterIds:number[]

}

export interface movieDto{
    title:string,
    summary:string,
    poster:string;
    inTheaters:boolean,
    releaseDate:Date,
    trailer:string,
    genresIds:number[],
    movieTheaterIds:number[]
}
