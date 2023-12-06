import CollaboratorsCard from "../CollaboratorsCard/Index";
import "./CollaboratosContainer.css";

function CollaboratorsContainer(props) {
  return (
    <>
      {props.collaborators.length > 0 ? (
        <section
          className="CollaboratorsContainer pt-4 pb-5"
          style={{ backgroundColor: props.colorPrimary }}
        >
          <div className="container">
            <div className="pt-3 pb-4">
              <h2 style={{ borderBottomColor: props.colorSecondary }}>
                {props.team}
              </h2>
            </div>
            <ul className="list-unstyled d-flex justify-content-center gap-4 flex-wrap">
              {props.collaborators.map((collaborator, index) => (
                <CollaboratorsCard
                  colorSecondary={props.colorSecondary}
                  image={collaborator.image}
                  key={index}
                  name={collaborator.name}
                  position={collaborator.position}
                />
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
export default CollaboratorsContainer;
