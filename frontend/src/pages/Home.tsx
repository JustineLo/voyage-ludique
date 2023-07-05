import GameList from "../components/GameList"
import GameSearch from "../components/GameSearch"

function Home() {
    return (
        <div>
            <GameSearch />
            <GameList />
        </div>
    )
}

export default Home