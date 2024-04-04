import { styled } from "styled-components";
import { Button } from "primereact/button"
import { useContext } from "react";
import { TeamContext } from "../../contexts/TeamContext";
const TeamContainer = styled.div`
    background-color: #333333;
    border-radius: 5px;
    padding: 16px;
    & h5{
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0;
    }
    & h1{
        width: 120px;
        height: 120px;
        background-color: #464646;
        border-radius: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 60px;
        & span{
            font-size: 16px;
            display: block;
        }
    }
    & .acoes{
        display: flex;
        gap: 16px;
        margin-top: 16px;
        & button:first-of-type{
            flex: 1;
        }
    }
`;

interface TeamProps {
    nome: string;
    capacidade: number;
    integrantes: string[];
}

const Team = ({ nome, capacidade = 0, integrantes = [] }: TeamProps) => {
    
    const { setSidebar, confirmacao, setDialog } = useContext(TeamContext);

    return(
        <TeamContainer>
            <h5>{nome} <i className="pi pi-eye" onClick={() => setDialog(true)}></i></h5>
            <h1>{integrantes.length}<span>/{capacidade}</span></h1>
            <div className="acoes">
                <Button
                    label="Adicionar"
                    onClick={() => setSidebar(true)}
                />
                <Button 
                    icon={"pi pi-trash"}
                    onClick={() => confirmacao()}
                />
            </div>
        </TeamContainer>
    );
}

export default Team