import { Link } from "react-router-dom"
import GamesList from "../components/GamesList"
import GameSearch from "../components/GameSearch"

function Home() {
    return (
        <div>
            <GameSearch />
            <GamesList />
            <Link to="/ajouter-jeu">Ajouter un jeu</Link>
        </div>
    )
}

export default Home