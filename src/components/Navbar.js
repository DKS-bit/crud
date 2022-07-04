import { Container } from "../styles/navbar.styled";

function Navbar(props) {
    return (
    <Container>
        <h2>{props.text}</h2>
        <img src="https://placekitten.com/15/15"/>
    </Container>
    );
}

export default Navbar;