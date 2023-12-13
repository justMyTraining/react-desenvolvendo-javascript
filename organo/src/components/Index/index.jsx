import { useState } from "react";
import Banner from "../Banner";
import Form from "../Form";
import CollaboratorsContainer from "../CollaboratorsContainer/Index";
import BannerFooter from "../BannerFooter/Index";

function Index() {
  const [collaborators, setCollaborators] = useState([]);

  const teamsAndColors = [
    {
      team: "Programação",
      colorPrimary: "#D9F7E9",
      colorSecondary: "#57C278",
    },
    {
      team: "Front-End",
      colorPrimary: "#E8F8FF",
      colorSecondary: "#82CFFA",
    },
    {
      team: "Data Science",
      colorPrimary: "#F0F8E2",
      colorSecondary: "#A6D157",
    },
    {
      team: "Devops",
      colorPrimary: "#FDE7E8",
      colorSecondary: "#E06B69",
    },
    {
      team: "Ux e Design",
      colorPrimary: "#FAE9F5",
      colorSecondary: "#DB6EBF",
    },
    {
      team: "Mobile",
      colorPrimary: "#FFF5D9",
      colorSecondary: "#FFBA05",
    },
    {
      team: "Inovação e Gestão",
      colorPrimary: "#FFEEDF",
      colorSecondary: "#FF8A29",
    },
  ];

  const updateCollaboratorsArray = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

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
        {teamsAndColors.map((teams) => (
          <CollaboratorsContainer
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === teams.team
            )}
            colorPrimary={teams.colorPrimary}
            colorSecondary={teams.colorSecondary}
            key={teams.team}
            team={teams.team}
          />
        ))}
      </main>
      <footer>
        <BannerFooter />
      </footer>
    </>
  );
}
export default Index;
