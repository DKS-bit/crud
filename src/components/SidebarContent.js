import { Container } from "../styles/sidebarContent.styled";
import {Link} from "react-router-dom";

function SidebarContent(props) {
    return (
    <Container>
        <img src= {props.link}/>

        <Link to={{ pathname: "/Home"}}>{props.text}</Link>
    </Container>
    );
}

export default SidebarContent;