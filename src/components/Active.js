import { Container } from "../styles/active.styled";
function Active(props) {
    return (
        <Container>
            <button className={props.estado}>{props.texto}</button>
        </Container>
    );
}

export default Active;