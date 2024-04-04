import { Sidebar } from 'primereact/sidebar';

import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primeicons/primeicons.css";
import Header from "./components/Header";
import Teams from "./components/Teams";
import { TeamContext } from './contexts/TeamContext';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Dialog } from 'primereact/dialog';


const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dialog, setDialog] = useState(false);

  function confirmacao(){
    confirmDialog({
      header: "Aviso: ",
      icon: "pi pi-exclamation-circle",
      message: "Tem certeza que quer apagar?",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () => {
        alert("Team apagado com sucesso!");
      }
    });
  }

  return (
    <>
      <TeamContext.Provider value={{sidebar, setSidebar, confirmacao, dialog, setDialog}}>
        <Header />
        <Teams />
        <Sidebar
          position='right'
          visible={sidebar}
          onHide={() => setSidebar(!sidebar)}
        >
          <form>
            <h3>Cadastrar Team</h3>
            <label htmlFor="nome">Nome do team</label>
            <InputText 
              id='nome'
            />
            <label htmlFor="capacidade">Capacidade</label>
            <InputText 
              id='capacidade' 
            />
            <Button 
              type='submit'
              label='Cadastrar'
            />
          </form>
        </Sidebar>
        <ConfirmDialog />
        <Dialog
          header={"Membros"}
          visible={dialog}
          onHide={() => setDialog(false)}
        >
          <p>Lista dos membros</p>
        </Dialog>
      </TeamContext.Provider>
    </>
  );
}

export default App;