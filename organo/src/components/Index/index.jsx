import { useState, useEffect } from "react";
import Banner from "../Banner";
import Form from "../Form";
import CollaboratorsContainer from "../CollaboratorsContainer/Index";
import CollaboratorsCard from "../CollaboratorsCard/Index";

function Index() {
  const [collaborators, setCollaborators] = useState([]);

  const teamsAndColors = [
    {
      team: "Programação",
      colorPrimary: "#D9F7E9",
      ColorSecondary: "#57C278",
    },
    {
      team: "Front-End",
      colorPrimary: "#E8F8FF",
      ColorSecondary: "#82CFFA",
    },
    {
      team: "Data Science",
      colorPrimary: "#F0F8E2",
      ColorSecondary: "#A6D157",
    },
    {
      team: "Devops",
      colorPrimary: "#FDE7E8",
      ColorSecondary: "#E06B69",
    },
    {
      team: "Ux e Design",
      colorPrimary: "#FAE9F5",
      ColorSecondary: "#DB6EBF",
    },
    {
      team: "Mobile",
      colorPrimary: "#FFF5D9",
      ColorSecondary: "#FFBA05",
    },
    {
      team: "Inovação e Gestão",
      colorPrimary: "#FFEEDF",
      ColorSecondary: "#FF8A29",
    },
  ];

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
        <Form
          addNewCollaborator={(e) => updateCollaboratorsArray(e)}
          teams={teamsAndColors.map((teams) => teams.team)}
        />
        <CollaboratorsContainer teams={teamsAndColors} />
      </main>
    </>
  );
}
export default Index;
