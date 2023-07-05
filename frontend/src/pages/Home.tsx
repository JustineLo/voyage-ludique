import { Link } from "react-router-dom"
import GameList from "../components/GameList"
import GameSearch from "../components/GameSearch"

function Home() {
    return (
        <div>
            <GameSearch />
            <GameList />
            <Link to="/ajouter-jeu">Ajouter un jeu</Link>
        </div>
    )
}

export default Home