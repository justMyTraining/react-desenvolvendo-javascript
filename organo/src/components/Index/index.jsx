import { useState, useEffect } from "react";
import Banner from "../Banner";
import Form from "../Form";
import CollaboratorsContainer from "../CollaboratorsContainer/Index";
import CollaboratorsCard from "../CollaboratorsCard/Index";

function Index() {
  const [collaborators, setCollaborators] = useState([]);
  const updateCollaboratorsArray = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };
  useEffect(() => {
    console.log(collaborators); // O estado foi atualizado aqui
  }, [collaborators]);
  return (
    <>
      <header>
        <Banner />
      </header>
      <main>
        <Form addNewCollaborator={(e) => updateCollaboratorsArray(e)} />
        <CollaboratorsContainer>
          <CollaboratorsCard />
        </CollaboratorsContainer>
      </main>
    </>
  );
}
export default Index;
