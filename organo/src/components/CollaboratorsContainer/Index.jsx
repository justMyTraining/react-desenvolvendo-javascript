import CollaboratorsCard from "../CollaboratorsCard/Index";
import "./CollaboratosContainer.css";

function CollaboratorsContainer(props) {
  return (
    <>
      {props.teams.map((team) => (
        <section
          className="CollaboratorsContainer pt-4 pb-5"
          style={{ backgroundColor: team.colorPrimary }}
        >
          <div className="container">
            <div className="pt-3 pb-4">
              <h2 style={{ borderBottomColor: team.ColorSecondary }}>
                {team.team}
              </h2>
            </div>
            <ul className="list-unstyled">
              <CollaboratorsCard />
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
export default CollaboratorsContainer;
