import { styled } from "styled-components";
import Team from "../Team";

const TeamsContainer = styled.section`
    
`;

const Teams = () => {
    return(
        <TeamsContainer>
            <h2>Teams</h2>
            <Team nome={'FS19'}/>
        </TeamsContainer>
    );
}

export default Teams