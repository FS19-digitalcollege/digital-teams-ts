import { styled } from "styled-components";
import Team from "../Team";

const TeamsContainer = styled.section`
    padding: 26px 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    & h2 {
        width: 100%;
        margin-bottom: 26px;
    }
    & > div{
        width: calc(20% - 13px);
    }
`;

const Teams = () => {
    return(
        <TeamsContainer>
            <h2>Teams</h2>
            <Team nome={'FS19'} capacidade={4} integrantes={['Anderson', 'Ricardy', 'Daniel']}/>
        </TeamsContainer>
    );
}

export default Teams