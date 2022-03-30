import {NavLink, Routes} from "react-router-dom"


export default function Nav () {
    return (
    <nav>
        <ul>
            <li>
            <NavLink to='/Actors'>
                actors
            </NavLink>
            </li>

            <li>
                <NavLink to='/Movies'>
                    movies
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}