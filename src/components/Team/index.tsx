import { styled } from "styled-components";
import { Button } from "primereact/button"
const TeamContainer = styled.section`
    
`;

interface TeamProps {
    nome: string;
}

const Team = ({ nome }: TeamProps) => {
    return(
        <TeamContainer>
            <h5>{nome} <i className="pi pi-eye"></i></h5>
            <h1>0/0</h1>
            <div className="acoes">
                <Button
                    label="Adicionar"
                />
                <Button 
                    icon={"pi pi-trash"}
                />
            </div>
        </TeamContainer>
    );
}

export default Team