import { Container } from "../styles/table.styled";
import Active from "./Active";
import Inactive from "./Inactive";
function Table(props) {
    return (
        <Container>
            <table>
                <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Data Nascimento</th>
                    <th>Estado</th>
                    <th></th>
                </tr>
                <tr>
                    <td><img src="https://placekitten.com/44/44"></img></td>
                    <td>Tom Cruise</td>
                    <td>26 de Mar, 2019</td>
                    <td><Inactive></Inactive></td>
                    <td><img src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/more-2-512.png"className="acoes" /></td>
                </tr>
                <tr>
                    <td><img src="https://placekitten.com/44/44"></img></td>
                    <td>Matt Damon</td>
                    <td>30 de Nov, 2020</td>
                    <td><Active estado="inactive" texto="Inativo"></Active></td>
                    <td><img src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/more-2-512.png" className="acoes" /></td>
                </tr>
            </table>
        </Container >
    );
}

export default Table;