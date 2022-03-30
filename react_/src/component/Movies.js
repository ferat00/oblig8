import { getMovies } from "../lib/services/movieservices"


export default function Movies ({title, actor}) {
   
    async function dataMovie() {
       const data = await getMovies()
    }

    return(
        <div>
            <h2>{title}</h2>
            <p>{actor}</p>
            <button onClick={dataMovie}>klikk</button>
        </div>
    )
}