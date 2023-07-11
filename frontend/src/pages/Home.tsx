import GameSearch from "../components/GameSearch"
import MovesList from "../components/MovesList"
import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
`

function Home() {
    return (
        <Container>
            <GameSearch />
            <MovesList />
            
        </Container>
    )
}

export default Home 