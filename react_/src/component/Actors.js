import { Link } from "react-router-dom"
import { getActors } from "../lib/services/movieservices"



export default function Actors ({actors, setActors}) {

    async function dataActor() {
        const data = await getActors()
        setActors(data)
        console.log(actors)
     }

    return(
      <div>
          <button onClick={dataActor}>klikk</button>
          {actors?.length > 0? actors.map((navn)=>{
              console.log(navn)
              return(
                  <article key={navn.fullname}>
                        <h2> Name: {navn.fullname} </h2>
                        <p> Type: {navn._type} </p>
                        <button><Link to={navn.slug}>Read more</Link></button>
                        
                  </article>
              )
          }) : null}
      </div>
    )
}