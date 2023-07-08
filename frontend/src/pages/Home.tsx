import { Link } from "react-router-dom"
import GamesList from "../components/GamesList"
import GameSearch from "../components/GameSearch"
import MovesList from "../components/MovesList"

function Home() {
    return (
        <div>
            <GameSearch />
            <MovesList />
            <GamesList />
            <Link to="/ajouter-jeu">Ajouter un jeu</Link>
            
        </div>
    )
}

export default Home