import client from "../client";

const movie = `
title, 
_type,
"actor": actor-> name.current,
`


const actors = `
fullname, 
_type,
"slug": name.current,
text,
"movie": movie->slug.current,
`


export async function getMovies(){
    const dataMovies = await client.fetch( `*[_type == "movie"]{${movie}}`)
    console.log(dataMovies)
    return dataMovies
}

export async function getActors(){
    const dataActors = await client.fetch( `*[_type == "actor"]{${actors}}`)
    console.log(dataActors)
    return dataActors
}