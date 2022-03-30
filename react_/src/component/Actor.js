import { useParams } from "react-router-dom"

export default function Actor({ actors }) {

    const {name} = useParams()
    const oneactor = actors.find((navn)=>navn.slug === name);

    return (
        <div>
            <h2>Actor: {oneactor.fullname}</h2>
            <p>Movie: {oneactor.movie}</p>
            <p>Description: {oneactor.text}</p>
        </div>
    )
}