import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AppbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  color: white;
  padding: 1rem 2.6rem;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    color: white;
    background-color: var(--secondary);
    padding: 0.5rem 1rem;
  }
`;

function Navbar() {
  const navigate = useNavigate();
  return (
    <AppbarContainer>
      <h2>
        <Link to="/">Voyage Ludique</Link>
      </h2>
      <Buttons>
        <Button onClick={() => navigate("/ajouter-jeu")}>Ajouter un jeu</Button>
        <Button onClick={() => navigate("/ajouter-mouvement")}>
          Ajouter un mouvement
        </Button>
      </Buttons>
    </AppbarContainer>
  );
}

export default Navbar;
