import { styled } from "styled-components";
import { InputText } from 'primereact/inputtext';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 60px;
    padding: 16px 100px;
`;

const Header = () => {
    return(
        <HeaderContainer>
            <h1>LOGO</h1>
            <div className="p-input-icon-right">
                <i className="pi pi-search"></i>
                <InputText placeholder="Pesquisar por nome"/>
            </div>
        </HeaderContainer>
    );
}

export default Header;