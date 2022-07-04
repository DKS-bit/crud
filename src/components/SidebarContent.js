import { Container } from "../styles/sidebarContent.styled";

function SidebarContent(props) {
    return (
    <Container>
        <img src= {props.link}/>
        <p>{props.text}</p>
    </Container>
    );
}

export default SidebarContent;