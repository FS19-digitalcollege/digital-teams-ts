import { styled } from "styled-components";
import { Button } from "primereact/button"
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
    return(
        <TeamContainer>
            <h5>{nome} <i className="pi pi-eye"></i></h5>
            <h1>{integrantes.length}<span>/{capacidade}</span></h1>
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