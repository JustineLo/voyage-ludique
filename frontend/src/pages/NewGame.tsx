import { Link } from "react-router-dom";
import NewGameForm from "../components/NewGameForm";

function NewGame() {
    return (
        <>
            <NewGameForm />
            <Link to="/">Retour à la liste des jeux</Link>
        </>
        
    )
}

export default NewGame;