import { Container } from "../styles/sidebar.styled";
import SidebarContent from "./SidebarContent";
import { ImgText } from "../styles/imgText.styled";
const gear = require("../imgs/Vector.png");

function Sidebar() {
    return (
    <Container>
        <ImgText>
                <img src = "https://yt3.ggpht.com/0LlTclJ83iszU9z8k8XRME7C9hhJ2d59f0p5cfXpIGzg2cVdrCkhqFfDE3o8UMBAtFgML_N1=s900-c-k-c0x00ffffff-no-rj" alt="placekitten"></img>
        </ImgText>
            <SidebarContent link="https://placekitten.com/15/15" text="Home"/>
            <SidebarContent link="https://placekitten.com/15/15" text="Usuarios"/>
            <SidebarContent link={gear} text="Configuracoes"/>
            <SidebarContent link="https://placekitten.com/15/15" text="Creditos"/>


    </Container>
    );
}

export default Sidebar;