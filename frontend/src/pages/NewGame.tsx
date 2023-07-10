import { Link } from "react-router-dom";
import NewGameForm from "../components/NewGameForm";
import GamesList from "../components/GamesList";

function NewGame() {
    return (
        <>
            <NewGameForm />
            <GamesList />
            <Link to="/">Retour à la liste des jeux</Link>
        </>
        
    )
}

export default NewGame;