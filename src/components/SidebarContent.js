import { Container } from "../styles/sidebarContent.styled";
import {Link} from "react-router-dom";

function SidebarContent(props) {
    return (
    <Container>

        <Link to={{ pathname: props.link}}>{props.text}</Link>
    </Container>
    );
}

export default SidebarContent;