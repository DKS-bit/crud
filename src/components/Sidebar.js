import { Container } from "../styles/sidebar.styled";
import SidebarContent from "./SidebarContent";
import { ImgText } from "../styles/imgText.styled";
const gear = require("../imgs/Vector.png");

function Sidebar(props) {
    return (
    <Container>
        <ImgText>
                <img src = "https://yt3.ggpht.com/0LlTclJ83iszU9z8k8XRME7C9hhJ2d59f0p5cfXpIGzg2cVdrCkhqFfDE3o8UMBAtFgML_N1=s900-c-k-c0x00ffffff-no-rj" alt="placekitten"></img>
        </ImgText>
            <SidebarContent link="/Home" text="Home"/>
            <SidebarContent link="/Usuarios" text="Usuarios"/>
            <SidebarContent link="/Mensagens" text="Mensagens"/>
            <SidebarContent link="Creditos" text="Creditos"/>
            <SidebarContent link="Test" text="Teste"/>


    </Container>
    );
}

export default Sidebar;